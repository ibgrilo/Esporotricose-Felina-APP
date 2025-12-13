import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Overlay } from "@rneui/base";
import styles from "../styles";
import SVGComponent from "../assets/svg/SVGComponent";

const HowToDealOverlay = ({ visible, onClose, title, message, helpMessage }) => {
    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={onClose}
            overlayStyle={styles.overlayContainer}
            animationType="fade"
        >
            <View style={styles.overlayHeader}>
                <Text style={styles.overlayHeaderText}>{title}</Text>
            </View>
            <View style={styles.overlayContent}>
                <Text style={styles.overlayText}>{message}</Text>
                
                {helpMessage && (
                    <View style={styles.overlayHelpSection}>
                        <Text style={styles.overlayHelpText}>{helpMessage}</Text>
                    </View>
                )}
            </View>
        </Overlay>
    );
};

export default HowToDealOverlay;
