import React, { useEffect, useState, useCallback } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import styles from "../styles";
import VetInfoModal from "../components/VetInfoModal";
import MapLoadingScreen from "../components/MapLoadingScreen";
import VetResultBanner from "../components/VetResultBanner";
import { cleanOldCache, cleanMemoryCache } from "../services/vetCacheService";
import { fetchNearbyVeterinaries } from "../services/googlePlacesService";
import { requestLocationPermission } from "../services/locationService";
import { useMapMarkers } from "../hooks/useMapMarkers";

const NearbyVeterinariesMap = () => {
    const navigation = useNavigation();
    const [userLocation, setUserLocation] = useState(null);
    const [veterinaries, setVeterinaries] = useState([]);
    const [selectedVet, setSelectedVet] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [showResultBanner, setShowResultBanner] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { mapRef, handleMarkerRef } = useMapMarkers(userLocation, veterinaries);

    // Cleanup do cache ao desmontar
    useEffect(() => {
        return () => cleanMemoryCache();
    }, []);

    // Buscar veterinários próximos
    const handleFetchVeterinaries = useCallback(async (coords) => {
        try {
            setIsLoading(true);
            const vets = await fetchNearbyVeterinaries(coords);
            setVeterinaries(vets);

            if (vets.length > 0) {
                setShowResultBanner(true);
                setTimeout(() => setShowResultBanner(false), 6000);
            }
        } catch (error) {
            console.error("Erro ao buscar veterinários:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Solicitar permissão e localização
    const handleRequestLocation = useCallback(async () => {
        const { granted, coords } = await requestLocationPermission(navigation);

        if (!granted) {
            setIsLoading(false);
            return;
        }

        setUserLocation(coords);
        await handleFetchVeterinaries(coords);
    }, [navigation, handleFetchVeterinaries]);

    // Resetar estado ao focar na tela
    useFocusEffect(
        useCallback(() => {
            setUserLocation(null);
            setVeterinaries([]);
            setSelectedVet(null);
            setModalVisible(false);
            setShowResultBanner(false);
            setIsLoading(true);

            cleanOldCache();
            handleRequestLocation();
        }, [handleRequestLocation])
    );

    return (
        <View style={styles.mapContainer}>
            {isLoading ? (
                <MapLoadingScreen />
            ) : (
                <>
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        showsUserLocation={!!userLocation}
                        showsMyLocationButton={!!userLocation}
                        initialRegion={{
                            latitude: userLocation?.latitude || -2.5307,
                            longitude: userLocation?.longitude || -44.2915,
                            latitudeDelta: 0.08,
                            longitudeDelta: 0.08,
                        }}
                    >
                        {veterinaries.map((vet) => (
                            <Marker
                                key={vet.id}
                                ref={(ref) => handleMarkerRef(ref, vet.id)}
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

                    <VetResultBanner
                        count={veterinaries.length}
                        visible={showResultBanner}
                    />

                    <VetInfoModal
                        visible={modalVisible}
                        vet={selectedVet}
                        onClose={() => setModalVisible(false)}
                    />
                </>
            )}
        </View>
    );
};

export default NearbyVeterinariesMap;