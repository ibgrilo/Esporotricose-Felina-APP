import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Overlay } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import SVGComponent from "../assets/svg/SVGComponent";

const InfoButton = ({ type, name, description, types, system, extended, affectedRegions, tipsAndCare }) => {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    const handlePress = () => {
        if (type === 3) {
            navigation.navigate("Sinal Sistêmico", {
                type,
                name,
                description,
                types,
                system,
                extended,
            });
        } else if (type === 1) {
            navigation.navigate("Sinal Cutâneo", {
                type,
                name,
                description,
                types,
                affectedRegions,
            })
        }
        else {
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
                    animationType="fade"
                    overlayStyle={styles.overlayContainer}
                >
                    <View style={styles.overlayHeader}>
                        <View style={styles.overlayHeaderIcon}>
                            <SVGComponent name="Cross" />
                        </View>
                        <Text style={styles.overlayHeaderText}>Dicas e Cuidados</Text>
                    </View>
                    <View style={styles.overlayContent}>
                        {tipsAndCare ? (
                            tipsAndCare.split('\n\n').map((item, index, array) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.overlayListItem,
                                        index === array.length - 1 && styles.overlayListItemLast
                                    ]}
                                >
                                    <Text style={styles.overlayText}>{item.trim()}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.overlayText}>
                                ⚠️ Procure um veterinário para avaliação e tratamento adequado.
                            </Text>
                        )}
                    </View>
                </Overlay>
            )}
        </>
    );
};

export default InfoButton;
