import React, { useState } from "react";
import { Text, View } from "react-native";
import styles, { buttonSizes } from "../styles";
import colors from "../theme/colors";
import SVGComponent from "../assets/svg/SVGComponent";
import SignsAndSymptomsButton3 from "./SignsAndSymptomsButton3";

export default ({ name, description }) => {

    const [height, setHeight] = useState(0); // Estado para armazenar a altura do botão

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
                    <SVGComponent name="Bandage" />
                </View>
            </View>

            <View style={{ ...styles.SignsAndSymptomsPanelViews, marginBottom: buttonSizes * 0.05 }}>
                <Text style={styles.SignsAndSymptomsPanelDescription}>
                    {description}
                </Text>
            </View>
            <View style={styles.SignsAndSymptomsButtonViews}>
                <SignsAndSymptomsButton3 type={1} />
                <SignsAndSymptomsButton3 type={2} />
            </View>
        </View>
    );
};
