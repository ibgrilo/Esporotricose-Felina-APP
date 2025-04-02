import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import colors from "../theme/colors";
import HowToDealText1 from "../data/HowToDealText1";
import styles from "../styles";
import FixedLogo from "../components/FixedLogo";

export default props => {
    return (
        <ScrollView>
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <HowToDealText1 />
        </ScrollView>
    )
}