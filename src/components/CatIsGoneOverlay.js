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
            animationType="fade"
        >
            <View style={styles.overlayContent}>
                <Text style={styles.overlayText}>{message}</Text>
            </View>
        </Overlay>
    );
};

export default HowToDealOverlay;
