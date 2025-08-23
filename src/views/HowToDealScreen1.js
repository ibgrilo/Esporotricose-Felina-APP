import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text } from "react-native";
import colors from "../theme/colors";
import AccordionCard from "../components/AccordionCard";
import styles from "../styles";
import howToDealText1 from "../data/howToDealText1";

export default props => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <AccordionCard data={howToDealText1} />

            <View style={styles.alertCard}>

                <Text style={styles.alertText}>
                    NUNCA ABANDONE UM ANIMAL DOENTE!
                </Text>
            </View>
        </ScrollView>
    )
}