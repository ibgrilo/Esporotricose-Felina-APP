import React, { useState } from "react";
import { Text, TouchableOpacity, View, Linking } from "react-native"; // Importando Linking
import styles from "../styles";
import CatIsGoneOverlay from "./CatIsGoneOverlay";
// Removido o PetCremationOverlay, já que não será mais usado

export default function HowToDealButton(props) {
    const { navigation } = props.props;
    const [modalVisible, setModalVisible] = useState(false);

    const toggleOverlay = () => {
        setModalVisible(!modalVisible);
    };

    // Abrir os dois locais no Google Maps app com base na localização do usuário
    const openMultipleLocations = () => {
        const query = encodeURIComponent(
            "Pet Forever Cemitério e Crematório de animais @ -1.8077303756296992,-44.271143908519\nSalvaatore Pet @ -2.5563768267390357,-44.18949325361085"
        );
        const url = `geo:0,0?q=${query}`;
        Linking.openURL(url).catch(err =>
            console.error("Erro ao abrir múltiplas localizações no Google Maps", err)
        );
    };

    function chooseScreen() {
        if (props.name === "Desconfia que seu gato está com esporotricose?") {
            navigation.push("Está com esporotricose?");
            return;
        }

        if (props.name === "Como é transmitida?") {
            navigation.push("Como é transmitida?");
            return;
        }

        if (props.name === "O seu gatinho partiu. O que fazer?") {
            toggleOverlay();
            return;
        }

        if (props.name === "Locais para cremação de pets") {
            navigation.push("Locais para cremação"); // Nome da rota no Stack.Navigator
            return;
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.howToDealButton} onPress={chooseScreen}>
                <Text style={styles.textButtonWhite}>{props.name}</Text>
            </TouchableOpacity>
            <CatIsGoneOverlay
                visible={modalVisible}
                onClose={toggleOverlay}
                title="O seu gatinho partiu. O que fazer?"
                message="Não descarte nem sepulte o animal. Ele deve ser cremado, pois o fungo se dissemina em matéria orgânica e no solo."
            />
        </View>
    );
}
