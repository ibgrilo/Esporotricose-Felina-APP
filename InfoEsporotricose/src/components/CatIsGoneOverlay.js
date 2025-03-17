import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Overlay } from "@rneui/base";
import styles from "../styles";

const HowToDealOverlay = ({ visible, onClose, title, message }) => {
    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={onClose}
            overlayStyle={styles.overlayContainer}
        >
            <View style={styles.overlayContent}>
                <View style={styles.overlayHeader}>
                    <Text style={styles.overlayHeaderText}>{title}</Text>
                </View>
                <Text style={styles.overlayText}>{message}</Text>

                <TouchableOpacity onPress={onClose} style={styles.overlayCloseButton}>
                    <Text style={styles.overlayCloseButtonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Overlay>
    );
};

export default HowToDealOverlay;
