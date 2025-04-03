import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Overlay } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import SVGComponent from "../assets/svg/SVGComponent";

const InfoButton = ({ type, name, description, types, system, extended }) => {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    const handlePress = () => {
        if (type === 1 || type === 3) {
            navigation.navigate("Sintoma", {
                type,
                name,
                description,
                types,
                system,
                extended,
            });
        } else {
            setVisible(true);
        }
    };

    const getButtonContent = () => {
        let label = "Botão padrão";
        let svgName;

        switch (type) {
            case 1:
                label = "Imagem ilustrativa";
                svgName = "Image";
                break;
            case 2:
                label = "Dicas e cuidados";
                svgName = "Cross";
                break;
            case 3:
                label = "Saiba mais";
                svgName = "Info";
                break;
        }

        return (
            <>
                <Text style={styles.SignsAndSymptomsButton2Title}>{label}</Text>
                {svgName && <SVGComponent name={svgName} />}
            </>
        );
    };

    return (
        <>
            <TouchableOpacity
                style={styles.SignsAndSymptomsButton2}
                onPress={handlePress}
            >
                {getButtonContent()}
            </TouchableOpacity>

            {type !== 1 && type !== 3 && (
                <Overlay
                    isVisible={visible}
                    onBackdropPress={() => setVisible(false)}
                    overlayStyle={styles.overlayContainer}
                >
                    <View style={styles.overlayContent}>
                        <Text style={styles.overlayText}>
                            ⚠️ Procure um veterinário para avaliação e tratamento adequado.
                        </Text>
                    </View>
                </Overlay>
            )}
        </>
    );
};

export default InfoButton;
