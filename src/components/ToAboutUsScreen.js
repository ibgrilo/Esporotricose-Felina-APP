import React from "react";
import { View, TouchableOpacity } from "react-native";
import SVGComponent from "../assets/svg/SVGComponent";

export default ({ props }) => (
    <TouchableOpacity onPress={() => props.navigation.navigate("Sobre nós")}>
        <SVGComponent name="Sobre nós" />
    </TouchableOpacity>
)