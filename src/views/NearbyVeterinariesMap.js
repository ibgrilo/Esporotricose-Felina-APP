import React, { useEffect, useState, useRef } from "react";
import {
    View,
    Alert,
    Text,
    Linking,
    ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import styles from "../styles";
import colors from "../theme/colors";
import VetInfoModal from "../components/VetInfoModal";

const API_KEY = "AIzaSyAdF6NRC6czSt3vhoz8sH0lGtPd0EIK-lA";

// Cache em memória para acesso mais rápido
const memoryCache = {};

// Função para limpar cache antigo
const cleanOldCache = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const vetKeys = keys.filter(key => key.startsWith('vet_'));

        if (vetKeys.length > 20) {
            const keysToRemove = vetKeys.slice(0, vetKeys.length - 15);
            await AsyncStorage.multiRemove(keysToRemove);
        }
    } catch (error) {
        console.warn("Erro ao limpar cache:", error);
    }
};

// Função de cache híbrido otimizada
const getCachedDetails = async (placeId) => {
    // Primeiro verifica cache em memória (instantâneo)
    if (memoryCache[placeId]) {
        return memoryCache[placeId];
    }

    // Se não estiver em memória, verifica AsyncStorage
    try {
        const cached = await AsyncStorage.getItem(`vet_${placeId}`);
        if (cached) {
            const data = JSON.parse(cached);
            memoryCache[placeId] = data; // Salva no cache de memória
            return data;
        }
    } catch (err) {
        console.warn("Erro ao acessar cache", err);
    }
    return null;
};

const setCachedDetails = async (placeId, data) => {
    // Salva primeiro no cache de memória (instantâneo)
    memoryCache[placeId] = data;

    // Depois salva no AsyncStorage (não bloqueia)
    try {
        AsyncStorage.setItem(`vet_${placeId}`, JSON.stringify(data));
    } catch (err) {
        console.warn("Erro ao salvar cache", err);
    }
};

const fetchPlaceDetails = async (placeId) => {
    const cached = await getCachedDetails(placeId);
    if (cached) return cached;

    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,geometry,formatted_address,formatted_phone_number&key=${API_KEY}`;

    try {
        const response = await fetch(detailsUrl);
        const data = await response.json();
        if (data.result) {
            setCachedDetails(placeId, data.result); // Não espera salvar
            return data.result;
        }
        return null;
    } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        return null;
    }
};

const NearbyVeterinariesMap = () => {
    const navigation = useNavigation();
    const [userLocation, setUserLocation] = useState(null);
    const [veterinaries, setVeterinaries] = useState([]);
    const [selectedVet, setSelectedVet] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [locationPermissionGranted, setLocationPermissionGranted] = useState(null);
    const [isLoadingLocation, setIsLoadingLocation] = useState(true);
    const mapRef = useRef(null);
    const markerRefs = useRef([]);

    const requestLocationPermission = async () => {
        try {
            setIsLoadingLocation(true);
            const currentPermission = await Location.getForegroundPermissionsAsync();

            let status = currentPermission.status;
            if (status === "undetermined") {
                const permission = await Location.requestForegroundPermissionsAsync();
                status = permission.status;
            }

            if (status === "denied") {
                Alert.alert(
                    "Permissão de localização necessária",
                    "Para encontrar veterinários próximos, habilite a localização nas configurações.",
                    [
                        {
                            text: "Abrir Configurações",
                            onPress: () => Linking.openSettings(),
                        },
                        {
                            text: "Voltar",
                            onPress: () => navigation.goBack(),
                            style: "cancel",
                        },
                    ]
                );
                setLocationPermissionGranted(false);
                setIsLoadingLocation(false);
                return;
            }

            setLocationPermissionGranted(true);

            // SEM accuracy balanceada - usa padrão (High)
            const location = await Location.getCurrentPositionAsync({});

            setUserLocation(location.coords);
            setIsLoadingLocation(false);

            // Buscar veterinários em background
            fetchNearbyVeterinaries(location.coords);
        } catch (error) {
            console.error("Erro ao obter localização:", error);
            Alert.alert("Erro", "Não foi possível obter a localização.", [
                {
                    text: "Voltar",
                    onPress: () => navigation.goBack(),
                },
            ]);
            setIsLoadingLocation(false);
        }
    };

    const fetchNearbyVeterinaries = async ({ latitude, longitude }) => {
        try {
            const radius = 3000; // Raio menor = mais rápido
            const type = "veterinary_care";
            const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.results) {
                // Processar apenas os 8 primeiros para ser mais rápido
                const topResults = data.results.slice(0, 20);

                const detailedVets = await Promise.all(
                    topResults.map(async (place) => {
                        const details = await fetchPlaceDetails(place.place_id);
                        if (details) {
                            return {
                                name: details.name,
                                address: details.formatted_address || "Endereço não disponível",
                                phone: details.formatted_phone_number || "Telefone não disponível",
                                location: {
                                    lat: details.geometry.location.lat,
                                    lng: details.geometry.location.lng,
                                },
                            };
                        }
                        return null;
                    })
                );

                setVeterinaries(detailedVets.filter(Boolean));
            }
        } catch (error) {
            console.error("Erro ao buscar locais:", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            // Reset states
            setUserLocation(null);
            setVeterinaries([]);
            setSelectedVet(null);
            setModalVisible(false);
            setLocationPermissionGranted(null);
            setIsLoadingLocation(true);

            // Limpar cache periodicamente
            cleanOldCache();

            // Start location request immediately
            requestLocationPermission();
        }, [])
    );

    useEffect(() => {
        if (mapRef.current && userLocation && veterinaries.length > 0) {
            const timer = setTimeout(() => {
                mapRef.current.fitToCoordinates(
                    veterinaries.map((vet) => ({
                        latitude: vet.location.lat,
                        longitude: vet.location.lng,
                    })),
                    {
                        edgePadding: { top: 40, right: 40, bottom: 40, left: 40 },
                        animated: true,
                    }
                );

                setTimeout(() => {
                    markerRefs.current.forEach((ref) => {
                        if (ref) ref.showCallout();
                    });
                }, 300); // Reduzido de 500ms para 300ms
            }, 200); // Reduzido de 300ms para 200ms
            return () => clearTimeout(timer);
        }
    }, [userLocation, veterinaries]);

    // Loading simples SEM barra de progresso
    if (isLoadingLocation) {
        return (
            <View style={styles.loadingScreenContainer}>
                <ActivityIndicator size="large" color={colors.primary} style={styles.loadingSpinner} />
                <Text style={styles.mapLoadingTitle}>Carregando localização...</Text>
            </View>
        );
    }

    return (
        <View style={styles.mapContainer}>
            <MapView
                ref={mapRef}
                style={styles.map}
                showsUserLocation={userLocation ? true : false}
                showsMyLocationButton={userLocation ? true : false}
                initialRegion={{
                    latitude: userLocation ? userLocation.latitude : -2.5307,
                    longitude: userLocation ? userLocation.longitude : -44.2915,
                    latitudeDelta: 0.08, // Zoom um pouco mais próximo
                    longitudeDelta: 0.08,
                }}
            >
                {veterinaries.map((vet, index) => (
                    <Marker
                        key={index}
                        ref={(ref) => (markerRefs.current[index] = ref)}
                        coordinate={{
                            latitude: vet.location.lat,
                            longitude: vet.location.lng,
                        }}
                        title={vet.name}
                        description={vet.address}
                        onPress={() => {
                            setSelectedVet(vet);
                            setModalVisible(true);
                        }}
                    />
                ))}
            </MapView>

            {!userLocation && (
                <View style={styles.noLocationBanner}>
                    <Text style={styles.noLocationText}>
                        Para encontrar veterinários próximos, permita o acesso à sua localização
                    </Text>
                </View>
            )}

            {veterinaries.length > 0 && (
                <View style={styles.resultCountBanner}>
                    <Text style={styles.resultCountText}>
                        {`Encontramos ${veterinaries.length} veterinário${veterinaries.length > 1 ? "s" : ""} próximo${veterinaries.length > 1 ? "s" : ""}.`}
                    </Text>
                </View>
            )}

            <VetInfoModal
                visible={modalVisible}
                vet={selectedVet}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
};

export default NearbyVeterinariesMap;
