import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import styles from "../styles";
import colors from "../theme/colors";
import SignsAndSymptomsButton from "../components/SignsAndSymptomsButton";
import FixedLogo from "../components/FixedLogo";

export default ({ navigation }) => {
    return (
        <View style={styles.globalContainer}>
            <View style={styles.containerSignAndSymptomsMenu}>
                <StatusBar translucent={false} backgroundColor={colors.primary} />
                <SignsAndSymptomsButton name="SkinSign" buttonName="Cutâneo" navigation={navigation} />
                <SignsAndSymptomsButton name="SystemSign" buttonName="Sistêmicos" navigation={navigation} />
            </View>
        </View>
    )
}