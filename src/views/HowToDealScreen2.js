import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import colors from "../theme/colors";
import HowToDealText2 from "../data/HowToDealText2";
import styles from "../styles";
import FixedLogo from "../components/FixedLogo";

export default props => {
    return (
        <ScrollView>
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <HowToDealText2 />
        </ScrollView>
    )
}