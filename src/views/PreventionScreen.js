import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import PreventionAccordion from "../components/PreventionAccordion";
import preventionText from "../data/PreventionText";
import SVGComponent from "../assets/svg/SVGComponent";

export default props => {
    return (
        <View style={styles.preventionMainContainer}>
            <SVGComponent name="prevention" />

            <View style={[styles.enhancedDescriptionCard, styles.preventionIntroCard]}>
                <Text style={styles.enhancedDescriptionText}>
                    A esporotricose felina é transmitida principalmente pela inoculação do fungo
                    <Text style={styles.italic}> Sporothrix sp.</Text> na pele. Pequenas ações podem evitá-la:
                </Text>
            </View>

            <PreventionAccordion data={preventionText} />

            <View style={[styles.alertCard, styles.preventionFinalAlert]}>
                <Text style={styles.alertIcon}>💚</Text>
                <Text style={styles.alertText}>
                    CUIDE DO SEU FELINO COM AMOR E RESPONSABILIDADE!
                </Text>
            </View>
        </View>
    );
};