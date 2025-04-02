import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import style from "../styles";
import colors from "../theme/colors";
import FixedLogo from "../components/FixedLogo";

export default props => {
    return (
        <View >
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <Text style={style.textFromButton}> Sobre nós!!!</Text>
        </View>
    )
}