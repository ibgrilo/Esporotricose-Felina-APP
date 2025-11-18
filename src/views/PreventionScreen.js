import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "../styles";
import preventionText from "../data/preventionText";
import Prevention from "../assets/svg/icons/Prevention";
import { buttonSizes } from "../styles";
import AccordionCard from "../components/AccordionCard";
import SVGComponent from "../assets/svg/SVGComponent";

export default props => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <SVGComponent name="LoadingLogo" />
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

            <View style={styles.preventionCard}>
                <Text style={styles.preventionCardTitle}>
                    Cuide do seu felino com amor e responsabilidade!
                </Text>
                <Text style={styles.preventionCardDescription}>
                    Seguindo as medidas preventivas, você protege seu gato da esporotricose e garante uma vida mais saudável e feliz para ele. Lembre-se: prevenção é sempre o melhor remédio! Em caso de dúvidas, consulte sempre um médico veterinário.
                </Text>
            </View>
        </ScrollView>
    );
};