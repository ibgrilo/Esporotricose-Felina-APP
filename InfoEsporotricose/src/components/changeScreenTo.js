import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Style from "../styles";
import SVGComponent from "../assets/svg/SVGComponent";

export default ({ props, name }) => {
    return (
        <TouchableOpacity style={Style.changeScreenTo} onPress={() => props.navigation.navigate(name)}>
            <View style={Style.containerInsideButton}>
                <SVGComponent name={name} />
                <Text style={Style.textFromButton}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}