import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import styles from "../styles";
import { buttonSizes } from "../styles";
import colors from "../theme/colors";
import AboutUsText from "../data/AboutUsText";
import SVGComponent from "../assets/svg/SVGComponent";

export default props => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <AboutUsText />
        </ScrollView>
    )
}