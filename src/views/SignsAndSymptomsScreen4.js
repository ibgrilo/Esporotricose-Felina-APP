import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import SVGComponent from "../assets/svg/SVGComponent";
import styles, { buttonSizes } from "../styles";

const ChooseAffectedRegionSvg = ({ name }) => {
    const iconsMap = {
        "Úlceras na Pele": "UlcerasNaPele",
        "Nódulos e Abscessos": "NodulosEAbscessos",
        "Secreção Purulenta": "SecrecaoPurulenta",
        "Disseminação das Lesões": "DisseminacaoPorLesoes",
    };

    const iconName = iconsMap[name];
    return iconName ? <SVGComponent name={iconName} /> : null;
};

export default ({ route }) => {
    const { affectedRegions, name } = route.params;

    return (
        <ScrollView>
            <View style={styles.firstImageTitlePanel}>
                <Text style={styles.firstTitleText}>{name}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/DemonstrativeImage.png")}
                    style={styles.image}
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
