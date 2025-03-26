import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import colors from "../theme/colors";
import SVGComponent from "../assets/svg/SVGComponent";

export default ({ type }) => {
    function ButtonType({ type }) {
        let name, svgName;

        switch (type) {
            case 1:
                name = "Imagem ilustrativa";
                svgName = "Image"
                break;
            case 2:
                name = "Dicas e cuidados";
                svgName = "Cross"
                break;
            default:
                name = "Botão padrão";
                break;
        }

        return (<>
            <Text style={styles.SignsAndSymptomsButton3Title}>{name}</Text>
            <SVGComponent name={svgName} />
        </>);
    }

    return (
        <TouchableOpacity style={styles.SignsAndSymptomsButton3}>
            <ButtonType type={type} />
        </TouchableOpacity>
    );
};
