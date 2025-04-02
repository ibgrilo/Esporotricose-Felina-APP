import React, { useState } from "react";
import { Text, View } from "react-native";
import styles, { buttonSizes } from "../styles";
import colors from "../theme/colors";
import SVGComponent from "../assets/svg/SVGComponent";
import SignsAndSymptomsButton2 from "./SignsAndSymptomsButton2";

export default ({ name, description, types, system }) => {

    const [height, setHeight] = useState(0); // Estado para armazenar a altura do botão

    function SideIcon({ system }) {
        let iconName = ""
        switch (system) {
            case "Sistema respiratório":
                iconName = "Lung";
                break;
            case "Sistema linfático":
                iconName = "Mushroom";
                break;
            case "Sistema locomotor":
                iconName = "Paw";
                break;
            case "Sistema nervoso":
                iconName = "Brain";
                break;
            default:
                iconName = "Bandage"
                break;
        }
        return <SVGComponent name={iconName} />
    }

    return (
        <View
            style={[
                styles.SignsAndSymptomsPanel,
                { borderRadius: height * 0.15 }, // Ajusta o borderRadius conforme a altura do botão
            ]}
            onLayout={(event) => setHeight(event.nativeEvent.layout.height)} // Captura a altura do botão
        >
            <View style={styles.SignsAndSymptomsPanelViews}>
                <View style={styles.SignsAndSymptomsPanelTitleView}>
                    <Text style={styles.SignsAndSymptomsPanelTitle}>{name}</Text>
                </View>
                <View style={styles.SignsAndSymptomsPanelIconView}>
                    <SideIcon system={system} />
                </View>
            </View>

            <View style={{ ...styles.SignsAndSymptomsPanelViews, marginBottom: buttonSizes * 0.05 }}>
                <Text style={styles.SignsAndSymptomsPanelDescription}>
                    {description}
                </Text>
            </View>
            <View style={styles.SignsAndSymptomsButtonViews}>
                <SignsAndSymptomsButton2 type={types[0]} />
                <SignsAndSymptomsButton2 type={types[1]} />
            </View>
        </View>
    );
};