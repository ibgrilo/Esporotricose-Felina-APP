import React from "react";
import { View } from "react-native";
import SVGComponent from "../assets/svg/SVGComponent";
import styles from "../styles";

export default props => (
    <View style={styles.fixedLogo}>
        <SVGComponent name="Logo" />
    </View>
)