import React from "react";
import { View, Text } from "react-native";
import styles from "../styles"
import { buttonSizes } from "../styles";

export default props => (
    <View style={{
        marginBottom: buttonSizes * 0.079,
        paddingHorizontal: buttonSizes * 0.020
    }}>
        {/* Card de Introdução */}
        <View style={styles.enhancedDescriptionCard}>
            <Text style={styles.enhancedDescriptionText}>
                A esporotricose felina é transmitida principalmente pela inoculação do fungo
                <Text style={styles.italic}> Sporothrix sp.</Text> na pele. Pequenas ações podem evitá-la:
            </Text>
        </View>

        {/* Card Castração */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🐱</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Castre seu gato</Text>
                <Text style={styles.howToDealDescription}>
                    A castração é muito importante, pois diminui comportamentos de risco, como brigas por território e por fêmeas, e deslocamentos por grandes áreas.
                </Text>
            </View>
        </View>

        {/* Card Local Seguro */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🏠</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Mantenha em local seguro</Text>
                <Text style={styles.howToDealDescription}>
                    Animais que vivem em casa têm uma chance menor de serem expostos ao fungo através do solo contaminado ou do contato com animais doentes.
                </Text>
            </View>
        </View>

        {/* Card Evitar Gatos Errantes */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🚫</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Evite contato com gatos errantes</Text>
                <Text style={styles.howToDealDescription}>
                    Contato com animais de rua pode expor o seu gato ao fungo causador da esporotricose. Em caso de resgate, mantenha o animal isolado até a avaliação por um médico veterinário.
                </Text>
            </View>
        </View>

        {/* Card Enriquecimento Ambiental */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🎾</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Enriquecimento ambiental</Text>
                <Text style={styles.howToDealDescription}>
                    Gatos estressados têm maior chance de desenvolver a esporotricose, por isso é importante que tenham acesso a brinquedos e arranhadores.
                </Text>
            </View>
        </View>

        {/* Card Higiene */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🧼</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Higiene ambiental</Text>
                <Text style={styles.howToDealDescription}>
                    Limpe regularmente os objetos e os locais onde o seu gato vive, como brinquedos, camas e caixas de areia.
                </Text>
            </View>
        </View>

        {/* Card Check Up */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🩺</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Check Up veterinário</Text>
                <Text style={styles.howToDealDescription}>
                    Realize avaliações veterinárias periódicas, pois é importante para a detecção precoce dos sinais clínicos da esporotricose e de outras doenças.
                </Text>
            </View>
        </View>

        {/* Mensagem Final Destacada */}
        <View style={[styles.alertCard, {
            backgroundColor: '#28a745',          // Verde
            marginTop: buttonSizes * 0.079,     // Espaço acima
        }]}>
            <Text style={styles.alertIcon}>💚</Text>
            <Text style={styles.alertText}>
                CUIDE DO SEU FELINO COM AMOR E RESPONSABILIDADE!
            </Text>
        </View>
    </View>
)