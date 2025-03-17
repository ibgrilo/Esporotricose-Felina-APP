import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Overlay } from "@rneui/base";
import styles from "../styles";

const PetCremationOverlay = ({ visible, onClose }) => {
    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={onClose}
            overlayStyle={styles.overlayContainer}
        >
            <View style={styles.overlayContent}>
                <View style={styles.overlayHeader}>
                    <Text style={styles.overlayHeaderText}>Locais para cremação de pets</Text>
                </View>

                <Text style={styles.overlayText}>Pet Forever: (98) 98463-9566</Text>
                <Text style={styles.overlayText}>
                    📍 Av. Mascarenhas de Moraes, 58 - Matinha, São José de Ribamar - MA, 65110-000
                </Text>

                <Text style={styles.overlayText}>Salvatore Pet: (98) 2109-3999</Text>
                <Text style={styles.overlayText}>
                    📍 Estr. de Ribamar - Vila Santa Teresinha, São José de Ribamar - MA, 65137-000
                </Text>

                <TouchableOpacity onPress={onClose} style={styles.overlayCloseButton}>
                    <Text style={styles.overlayCloseButtonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Overlay>
    );
};

export default PetCremationOverlay;
