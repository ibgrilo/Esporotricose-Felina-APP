import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import colors from "../theme/colors";
import styles from "../styles";
import AccordionCard from "../components/AccordionCard";
import howToDealText2 from "../data/howToDealText2";

export default props => {
    return (
        <ScrollView 
            style={styles.scrollContainer}
            removeClippedSubviews={true}
            scrollEventThrottle={16}
        >
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <AccordionCard data={howToDealText2} />
            <View style={styles.infoCard}>
                <Text style={styles.infoCardTitle}>
                    Contato direto é necessário para a transmissão!
                </Text>
                <Text style={styles.infoCardDescription}>
                    A esporotricose não se transmite pelo ar. É preciso contato direto com as lesões do animal infectado ou com o fungo presente no ambiente. Evite o contato próximo com gatos doentes e sempre use luvas e máscara ao manuseá-los.
                </Text>
            </View>
        </ScrollView>
    )
}