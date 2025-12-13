import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text } from "react-native";
import colors from "../theme/colors";
import AccordionCard from "../components/AccordionCard";
import styles from "../styles";
import howToDealText1 from "../data/howToDealText1";

export default props => {
    return (
        <ScrollView
            style={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            scrollEventThrottle={16}
            removeClippedSubviews={true}
            maintainVisibleContentPosition={{
                minIndexForVisible: 0,
                autoscrollToTopThreshold: 10
            }}
        >
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <AccordionCard data={howToDealText1} />
            <View style={styles.legalWarningCard}>
                <Text style={styles.legalWarningTitle}>
                    ⚖️ Abandono de animais é crime
                </Text>
                <Text style={styles.legalWarningText}>
                    O abandono de animais é considerado crime ambiental pela Lei nº 9.605/98, artigo 32, com pena de 3 meses a 1 ano de detenção, além de multa. Abandono é maus-tratos e pode resultar em processo criminal.
                </Text>
            </View>
        </ScrollView>
    )
}