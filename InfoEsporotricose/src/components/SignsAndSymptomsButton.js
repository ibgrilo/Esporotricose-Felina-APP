import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import colors from "../theme/colors";
import SVGComponent from "../assets/svg/SVGComponent";

export default ({ name, buttonName }) => {

    console.log(name)
    return (
        <TouchableOpacity style={{
            ...styles.SignsAndSymptomsButton,
            backgroundColor: (name) => name === "VisibleSign" ? colors.secondary : colors.primary
        }}>
            <View style={styles.SignsAndSymptomsButtonContainer}>
                <Text style={styles.SignsAndSymptomsButtontitles}>{buttonName}</Text>
                <SVGComponent name={name} />
            </View>
        </TouchableOpacity>
    )
}