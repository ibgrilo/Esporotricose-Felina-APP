import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "../styles";
import preventionText from "../data/preventionText";
import Prevention from "../assets/svg/icons/Prevention";
import { buttonSizes } from "../styles";
import AccordionCard from "../components/AccordionCard";

export default props => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Prevention width={buttonSizes * 0.7} height={buttonSizes * 0.7} />
            </View>

            <View style={[styles.enhancedDescriptionCard, styles.preventionIntroCard]}>
                <Text style={styles.enhancedDescriptionText}>
                    A esporotricose felina é transmitida principalmente pela inoculação do fungo
                    <Text style={styles.italic}> Sporothrix sp.</Text> na pele. Pequenas ações podem evitá-la:
                </Text>
            </View>

            <AccordionCard data={preventionText} />

            <View style={[styles.alertCard, styles.preventionFinalAlert]}>

                <Text style={styles.alertText}>
                    CUIDE DO SEU FELINO COM AMOR E RESPONSABILIDADE!
                </Text>
            </View>
        </ScrollView>
    );
};