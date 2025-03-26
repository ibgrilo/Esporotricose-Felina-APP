import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import styles from "../styles";
import colors from "../theme/colors";
import SignsAndSymptomsButton from "../components/SignsAndSymptomsButton";

export default ({ navigation }) => {
    return (
        <View style={styles.containerSignAndSymptomsMenu}>
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <SignsAndSymptomsButton name="VisibleSign" buttonName="Visíveis" navigation={navigation} />
            <SignsAndSymptomsButton name="InvisibleSign" buttonName="Internos" navigation={navigation} />
        </View>
    )
}