import * as Location from "expo-location";
import { Alert, Linking } from "react-native";

// Solicitar permissão de localização
export const requestLocationPermission = async (navigation) => {
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
        return { granted: false, coords: null };
    }

    try {
        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
            timeout: 15000,
        });

        return { granted: true, coords: location.coords };
    } catch (error) {
        console.error("Erro ao obter localização:", error);
        Alert.alert("Erro", "Não foi possível obter a localização.", [
            {
                text: "Voltar",
                onPress: () => navigation.goBack(),
            },
        ]);
        return { granted: false, coords: null };
    }
};
