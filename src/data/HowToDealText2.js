import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "../styles"

export default props => (
    <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
            <Text style={styles.titleFromHowToDeal}>📌 O que é a Transmissão da Esporotricose?</Text>
            <Text style={styles.text}>
                A esporotricose é uma micose causada pelo fungo <Text style={styles.italic}>Sporothrix sp</Text>., que pode infectar gatos, humanos e outros animais.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.titleFromHowToDeal}>📌 Forma de transmissão:</Text>
            <Text style={styles.text}>
                - O fungo está presente no ambiente, como solo, madeira e plantas.
            </Text>
            <Text style={styles.text}>
                - Gatos podem se contaminar ao entrar em contato com locais infectados ou ao se ferirem em superfícies contaminadas.
            </Text>
            <Text style={styles.text}>
                - A transmissão para outros gatos, humanos e animais ocorre principalmente pelo contato direto com secreções de feridas infectadas.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.textAtention}>
                ⚠️Importante
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleMiddle}>
                O fungo não se transmite pelo ar! O contato direto com as lesões ou secreções infectadas é necessário para a contaminação.
            </Text>
        </View>
    </ScrollView>
)