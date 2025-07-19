import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { buttonSizes } from '../styles';
import colors from '../theme/colors';

const InfoesporotricoseComponent = () => {
    return (
        <View style={{
            marginBottom: buttonSizes * 0.079,
            paddingHorizontal: buttonSizes * 0.020
        }}>
            {/* Card O que é */}
            <View style={styles.howToDealCard}>
                <View style={styles.howToDealIconContainer}>
                    <Text style={styles.howToDealIcon}>🔬</Text>
                </View>
                <View style={styles.howToDealTextContainer}>
                    <Text style={styles.howToDealTitle}>O que é a Esporotricose?</Text>
                    <Text style={styles.howToDealDescription}>
                        A esporotricose é uma micose causada pelo fungo <Text style={styles.italic}>Sporothrix sp.</Text>,
                        que pode infectar gatos, humanos e outros animais.
                    </Text>
                </View>
            </View>

            {/* Card Origem do fungo */}
            <View style={styles.howToDealCard}>
                <View style={styles.howToDealIconContainer}>
                    <Text style={styles.howToDealIcon}>🌱</Text>
                </View>
                <View style={styles.howToDealTextContainer}>
                    <Text style={styles.howToDealTitle}>Onde o fungo está presente</Text>
                    <Text style={styles.howToDealDescription}>
                        O fungo está presente no ambiente, como solo, madeira e plantas.
                    </Text>
                </View>
            </View>

            {/* Card Como gatos se contaminam */}
            <View style={styles.howToDealCard}>
                <View style={styles.howToDealIconContainer}>
                    <Text style={styles.howToDealIcon}>🐾</Text>
                </View>
                <View style={styles.howToDealTextContainer}>
                    <Text style={styles.howToDealTitle}>Como gatos se contaminam</Text>
                    <Text style={styles.howToDealDescription}>
                        Gatos podem se contaminar ao entrar em contato com locais infectados ou ao se ferirem em superfícies contaminadas.
                    </Text>
                </View>
            </View>

            {/* Card Transmissão */}
            <View style={styles.howToDealCard}>
                <View style={styles.howToDealIconContainer}>
                    <Text style={styles.howToDealIcon}>🦠</Text>
                </View>
                <View style={styles.howToDealTextContainer}>
                    <Text style={styles.howToDealTitle}>Como se transmite</Text>
                    <Text style={styles.howToDealDescription}>
                        A transmissão para outros gatos, humanos e animais ocorre principalmente pelo contato direto com secreções de feridas infectadas.
                    </Text>
                </View>
            </View>

            {/* Card Importante - NÃO pelo ar */}
            <View style={[styles.howToDealCard, { borderLeftColor: colors.almostAttention }]}>
                <View style={[styles.howToDealIconContainer, { backgroundColor: 'rgba(255, 107, 53, 0.2)' }]}>
                    <Text style={styles.howToDealIcon}>💨</Text>
                </View>
                <View style={styles.howToDealTextContainer}>
                    <Text style={[styles.howToDealTitle, { color: colors.almostAttention }]}>Não se transmite pelo ar!</Text>
                    <Text style={styles.howToDealDescription}>
                        O contato direto com as lesões ou secreções infectadas é necessário para a contaminação.
                    </Text>
                </View>
            </View>

            {/* Card de Alerta */}
            <View style={styles.alertCard}>
                <Text style={styles.alertIcon}>⚠️</Text>
                <Text style={styles.alertText}>
                    CONTATO DIRETO É NECESSÁRIO PARA TRANSMISSÃO!
                </Text>
            </View>
        </View>
    );
};

export default InfoesporotricoseComponent;