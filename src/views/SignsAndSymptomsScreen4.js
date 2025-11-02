import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import SVGComponent from "../assets/svg/SVGComponent";
import styles, { buttonSizes } from "../styles";

const ChooseAffectedRegionSvg = ({ name }) => {
    const iconsMap = {
        "Úlceras na Pele": "UlcerasNaPele",
        "Nódulos e Abscessos": "NodulosEAbscessos",
        "Secreção Purulenta": "SecrecaoPurulenta",

    };
    const iconName = iconsMap[name];
    return iconName ? <SVGComponent name={iconName} /> : null;
};

const iconsImage = {
    "Úlceras na Pele": require("../assets/images/signs/ulcerasNaPele.jpg"),
    "Nódulos e Abscessos": require("../assets/images/signs/nodulosEAbscessos.jpg"),
    "Secreção Purulenta": require("../assets/images/signs/secrecaoPurulenta.jpg"),
}

export default ({ route }) => {
    const { affectedRegions, name } = route.params;
    return (
        <ScrollView>
            <View style={styles.firstImageTitlePanel}>
                <Text style={styles.firstTitleText}>{name}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={iconsImage[name]}
                    style={[styles.image, {
                        width: buttonSizes * 2.3,   // Aumentado de 0.8 para 1.2
                        height: buttonSizes * 2.4  // Aumentado de 0.86 para 1.29 (mantém proporção)
                    }]}
                />
            </View>

            <View style={styles.firstTitlePanel}>
                <Text style={styles.firstTitleText}>Áreas afetadas</Text>
            </View>

            <View style={styles.secondIconContainer}>
                <ChooseAffectedRegionSvg name={name} />
            </View>

            <View style={styles.regionTagsContainer}>
                {affectedRegions.map((regiao, index) => (
                    <View key={index} style={styles.secondTitlePanel}>
                        <Text style={styles.secondTitleText}>{regiao}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};
