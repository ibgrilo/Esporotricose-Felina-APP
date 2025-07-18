import React from "react";
import { Modal, View, Text, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles";
import colors from "../theme/colors";
import { buttonSizes } from "../styles";

const VetInfoModal = ({ visible, vet, onClose }) => {
    if (!vet) return null;

    const formatAddress = (address) => {
        if (!address) return "Endereço não disponível";
        return address.replace("Unnamed Road - ", "").replace("Unnamed Road, ", "");
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.vetModalOverlay}>
                <View style={styles.vetModalContainer}>
                    <View style={styles.vetModalHeader}>
                        <Text style={styles.vetModalTitle} numberOfLines={2} ellipsizeMode="tail">
                            {vet.name}
                        </Text>
                        <TouchableOpacity
                            onPress={onClose}
                            style={{ marginLeft: buttonSizes * 0.059 }}
                        >
                            <Ionicons name="close-circle" size={buttonSizes * .2} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.vetModalBody}>
                        <View style={styles.vetInfoItem}>
                            <Ionicons name="location" size={buttonSizes * 0.15} color={colors.primary} />
                            <Text style={styles.vetInfoText}>{formatAddress(vet.address)}</Text>
                        </View>

                        <View style={styles.vetInfoItem}>
                            <Ionicons name="call" size={buttonSizes * 0.15} color={colors.primary} />
                            <Text style={styles.vetInfoText}>{vet.phone || "Telefone não disponível"}</Text>
                        </View>
                    </View>

                    <View style={styles.vetButtonRow}>
                        <TouchableOpacity
                            style={[styles.vetButton, styles.vetPrimaryButton]}
                            onPress={() => {
                                Linking.openURL(`tel:${vet.phone}`);
                                onClose();
                            }}
                        >
                            <Text style={styles.vetButtonText}>Ligar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.vetButton, styles.vetSecondaryButton]}
                            onPress={onClose}
                        >
                            <Text style={styles.vetSecondaryButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default VetInfoModal;