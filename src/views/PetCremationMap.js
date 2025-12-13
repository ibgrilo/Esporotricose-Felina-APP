import React, { useEffect, useState, useRef } from "react";
import { View, Dimensions, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import VetInfoModal from "../components/VetInfoModal";

export default function PetCremationMap() {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedCremation, setSelectedCremation] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const mapRef = useRef(null);
    const markerRefs = useRef([]);

    const cremationLocations = [
        {
            latitude: -2.572988041319032,
            longitude: -44.16441173112429,
            name: "Pet Forever Cemitério e Crematório de Animais",
            description: "Cemitério de animais de estimação",
            address: "Av. Mascarenhas de Moraes, 58 - Matinha, São José de Ribamar - MA, 65110-000",
            phone: "(98) 98463-9566"
        },
        {
            latitude: -2.5575829827636873,
            longitude: -44.189527988163405,
            name: "Salvatore Pet",
            description: "Serviços funerários para animais de estimação",
            address: "Estr. de Ribamar - Vila Santa Teresinha, São José de Ribamar - MA, 65137-000",
            phone: "(98) 2109-3999"
        }
    ];

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permissão negada", "Não foi possível acessar sua localização.");
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setUserLocation(location.coords);
        })();
    }, []);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.fitToCoordinates(
                cremationLocations.map(loc => ({
                    latitude: loc.latitude,
                    longitude: loc.longitude
                })),
                {
                    edgePadding: { top: 80, right: 80, bottom: 80, left: 80 },
                    animated: true
                }
            );

            // Mostrar automaticamente os nomes dos marcadores
            setTimeout(() => {
                markerRefs.current.forEach(ref => {
                    if (ref) ref.showCallout();
                });
            }, 1000);
        }
    }, [userLocation]);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                initialRegion={{
                    latitude: -2.57,
                    longitude: -44.17,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                {cremationLocations.map((loc, index) => (
                    <Marker
                        key={index}
                        ref={(ref) => (markerRefs.current[index] = ref)}
                        coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                        title={loc.name}
                        description={loc.description}
                        onPress={() => {
                            setSelectedCremation({
                                name: loc.name,
                                address: loc.address,
                                phone: loc.phone,
                                location: {
                                    lat: loc.latitude,
                                    lng: loc.longitude
                                }
                            });
                            setModalVisible(true);
                        }}
                    />
                ))}
            </MapView>

            <VetInfoModal
                visible={modalVisible}
                vet={selectedCremation}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}
