import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import Prevention from "../assets/svg/icons/Prevention.svg"
import styles from "../styles";
import colors from "../theme/colors";
import { buttonSizes } from "../styles";
import PreventionText from "../data/PreventionText";
import FixedLogo from "../components/FixedLogo";

export default props => {
    return (

        <ScrollView style={styles.scrollContainer}>
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <View style={styles.container}>
                <Prevention width={`${buttonSizes * .7}`} height={`${buttonSizes * .7}`} />
            </View>
            <PreventionText />
        </ScrollView>

    )
}