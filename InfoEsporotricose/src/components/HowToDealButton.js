import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import CatIsGoneOverlay from "./CatIsGoneOverlay";
import PetCremationOverlay from "./PetCremationOverlay"; // Importando o novo Overlay

export default function HowToDealButton(props) {
    const { navigation } = props.props;
    const [modalVisible, setModalVisible] = useState(false);
    const [cremationOverlayVisible, setCremationOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setModalVisible(!modalVisible);
    };

    const toggleCremationOverlay = () => {
        setCremationOverlayVisible(!cremationOverlayVisible);
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
            toggleCremationOverlay();
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
            <PetCremationOverlay
                visible={cremationOverlayVisible}
                onClose={toggleCremationOverlay}
            />
        </View>
    );
}
