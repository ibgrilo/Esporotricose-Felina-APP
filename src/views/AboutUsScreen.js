import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Image, StyleSheet } from "react-native";
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

            <View style={localStyles.logoContainer}>
                <Image source={require("../assets/images/FAPEMA.png")} style={localStyles.logo} />
                <Image source={require("../assets/images/LabDeMicologia.png")} style={localStyles.logo} />
                <Image source={require("../assets/images/LAPS.png")} style={localStyles.logo} />
                <Image source={require("../assets/images/UEMA.png")} style={localStyles.logo} />
            </View>
        </ScrollView>
    );
};

const localStyles = StyleSheet.create({
    logoContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 24,
        paddingHorizontal: 16,
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: "contain",
    },
});
