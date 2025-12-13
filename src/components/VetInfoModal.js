import React from "react";
import { Modal, View, Text, TouchableOpacity, Linking, ScrollView } from "react-native";
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
            <TouchableOpacity
                style={styles.modalOverlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <TouchableOpacity
                    style={styles.modalContainer}
                    activeOpacity={1}
                    onPress={(e) => e.stopPropagation()}
                >
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle} numberOfLines={2} ellipsizeMode="tail">
                            {vet.name}
                        </Text>
                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.modalCloseButton}
                        >
                            <Ionicons name="close-circle" size={buttonSizes * .15} color={colors.textBlack} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        style={styles.modalContent}
                        contentContainerStyle={{ flexGrow: 1 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.modalInfoItem}>
                            <Ionicons name="location" size={buttonSizes * 0.12} color={colors.primary} />
                            <View style={styles.modalInfoTextContainer}>
                                <Text style={styles.modalInfoLabel}>Endereço:</Text>
                                <Text style={styles.modalInfoText}>{formatAddress(vet.address)}</Text>
                            </View>
                        </View>

                        <View style={styles.modalInfoItem}>
                            <Ionicons name="call" size={buttonSizes * 0.12} color={colors.primary} />
                            <View style={styles.modalInfoTextContainer}>
                                <Text style={styles.modalInfoLabel}>Telefone:</Text>
                                <Text style={styles.modalInfoText}>{vet.phone || "Telefone não disponível"}</Text>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={styles.modalActions}>
                        <TouchableOpacity
                            style={[styles.modalActionButton, styles.modalCallButton]}
                            onPress={() => {
                                if (vet.phone && vet.phone !== "Telefone não disponível") {
                                    Linking.openURL(`tel:${vet.phone}`);
                                }
                            }}
                        >
                            <Ionicons name="call" size={buttonSizes * 0.1} color={colors.surfaceWhite} />
                            <Text style={styles.modalActionButtonText}>Ligar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.modalActionButton, styles.modalDirectionsButton]}
                            onPress={() => {
                                if (vet.location) {
                                    const url = `https://www.google.com/maps/dir/?api=1&destination=${vet.location.lat},${vet.location.lng}`;
                                    Linking.openURL(url);
                                }
                            }}
                        >
                            <Ionicons name="navigate" size={buttonSizes * 0.1} color={colors.surfaceWhite} />
                            <Text style={styles.modalActionButtonText}>Localizar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default VetInfoModal;