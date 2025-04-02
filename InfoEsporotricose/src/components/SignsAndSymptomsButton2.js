import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Overlay } from "@rneui/base";
import styles from "../styles";
import colors from "../theme/colors";
import SVGComponent from "../assets/svg/SVGComponent";

const InfoButton = ({ type }) => {
    const [visible, setVisible] = useState(false);

    function ButtonType({ type }) {
        let name, svgName;

        switch (type) {
            case 1:
                name = "Imagem ilustrativa";
                svgName = "Image";
                break;
            case 2:
                name = "Dicas e cuidados";
                svgName = "Cross";
                break;
            case 3:
                name = "Saiba mais";
                svgName = "Info";
                break;
            default:
                name = "Botão padrão";
                break;
        }

        return (
            <>
                <Text style={styles.SignsAndSymptomsButton3Title}>{name}</Text>
                {svgName && <SVGComponent name={svgName} />}
            </>
        );
    }

    return (
        <>
            <TouchableOpacity
                style={styles.SignsAndSymptomsButton3}
                onPress={() => setVisible(true)}
            >
                <ButtonType type={type} />
            </TouchableOpacity>

            <Overlay
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
                overlayStyle={styles.overlayContainer}
            >
                <View style={styles.overlayContent}>
                    <Text style={styles.overlayText}>⚠️ Procure um veterinário para avaliação e tratamento adequado.</Text>
                </View>
            </Overlay>
        </>
    );
};

export default InfoButton;
