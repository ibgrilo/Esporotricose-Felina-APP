import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import colors from "../theme/colors";
import styles from "../styles";
import AccordionCard from "../components/AccordionCard";
import howToDealText2 from "../data/howToDealText2";

export default props => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <AccordionCard data={howToDealText2} />
            <View style={styles.alertCard}>
                <Text style={styles.alertText}>
                    CONTATO DIRETO É NECESSÁRIO PARA TRANSMISSÃO!
                </Text>
            </View>
        </ScrollView>
    )
}