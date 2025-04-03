import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import colors from "../theme/colors";
import HowToDealButton from "../components/HowToDealButton";
import FixedLogo from "../components/FixedLogo";
import styles from "../styles";

export default props => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <StatusBar translucent={false} backgroundColor={colors.primary} />
            <HowToDealButton name="Desconfia que seu gato está com esporotricose?" props={props} />
            <HowToDealButton name="O seu gatinho partiu. O que fazer?" props={props} />
            <HowToDealButton name="Locais para cremação de pets" props={props} />
            <HowToDealButton name="Como é transmitida?" props={props} />
        </ScrollView>
    )
}