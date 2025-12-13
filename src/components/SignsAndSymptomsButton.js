import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import colors from "../theme/colors";
import SVGComponent from "../assets/svg/SVGComponent";

export default ({ name, buttonName, navigation }) => {
    return (
        <TouchableOpacity style={{
            ...styles.SignsAndSymptomsButton,
            backgroundColor: name === "SkinSign" ? colors.secondary : colors.primary
        }}
            onPress={() => navigation.push("Lista de sinais", name)}
        >
            <View style={styles.SignsAndSymptomsButtonContainer}>
                <Text 
                    style={styles.SignsAndSymptomsButtontitles}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.8}
                >
                    {buttonName}
                </Text>
                <SVGComponent name={name} />
            </View>
        </TouchableOpacity>
    )
}