import React, { useEffect, useState, useRef } from "react";
import { View, Alert, Dimensions, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";

const API_KEY = "AIzaSyAdF6NRC6czSt3vhoz8sH0lGtPd0EIK-lA";

const fetchPlaceDetails = async (placeId) => {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,geometry,formatted_address,formatted_phone_number&key=${API_KEY}`;
    try {
        const response = await fetch(detailsUrl);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        return null;
    }
};

const NearbyVeterinariesMap = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [veterinaries, setVeterinaries] = useState([]);
    const mapRef = useRef(null);
    const markerRefs = useRef([]);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permissão negada", "Não foi possível acessar sua localização.");
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setUserLocation(location.coords);

            const { latitude, longitude } = location.coords;
            const radius = 5000;
            const type = "veterinary_care";

            const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.results) {
                    const detailedVets = await Promise.all(
                        data.results.map(async (place) => {
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
                } else {
                    Alert.alert("Erro", "Não foi possível encontrar veterinários próximos.");
                }
            } catch (error) {
                console.error(error);
                Alert.alert("Erro", "Ocorreu um erro ao buscar dados de locais.");
            }
        })();
    }, []);

    useEffect(() => {
        if (mapRef.current && userLocation) {
            mapRef.current.animateToRegion(
                {
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                },
                1000
            );
        }
    }, [userLocation]);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                initialRegion={{
                    latitude: userLocation ? userLocation.latitude : -2.57,
                    longitude: userLocation ? userLocation.longitude : -44.17,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                {veterinaries.map((vet, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: vet.location.lat,
                            longitude: vet.location.lng,
                        }}
                        title={vet.name}
                        description={`📞 ${vet.phone} - ${vet.address}`}

                    />
                ))}
            </MapView>
        </View>
    );
};

export default NearbyVeterinariesMap;
