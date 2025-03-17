import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import colors from "../theme/colors";
import HowToDealButton from "../components/HowToDealButton";

export default props => {
    return (
        <View >
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <HowToDealButton name="Desconfia que seu gato está com esporotricose?" props={props} />
            <HowToDealButton name="O seu gatinho partiu. O que fazer?" props={props} />
            <HowToDealButton name="Locais para cremação de pets" props={props} />
            <HowToDealButton name="Como é transmitida?" props={props} />
        </View>
    )
}