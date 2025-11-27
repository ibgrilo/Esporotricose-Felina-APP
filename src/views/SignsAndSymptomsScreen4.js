import React, { useState, useRef } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, Animated } from "react-native";
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
};

export default ({ route }) => {
    const { affectedRegions, name } = route.params;
    const [imageVisible, setImageVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const imageOpacity = useRef(new Animated.Value(0)).current;

    const handleShowImage = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(imageOpacity, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            })
        ]).start();

        setTimeout(() => setImageVisible(true), 300);
    };

    return (
        <ScrollView>
            <View style={styles.firstImageTitlePanel}>
                <Text style={styles.firstTitleText}>{name}</Text>
            </View>

            <View style={styles.imageContainer}>
                {!imageVisible ? (
                    <Animated.View style={[styles.sensitiveContentContainer, { opacity: fadeAnim }]}>
                        <Text style={styles.sensitiveContentWarningIcon}>⚠️</Text>
                        <Text style={styles.sensitiveContentTitle}>Conteúdo Sensível</Text>
                        <Text style={styles.sensitiveContentDescription}>
                            Esta imagem contém conteúdo que pode ser desconfortável para algumas pessoas.
                        </Text>
                        <TouchableOpacity
                            style={styles.sensitiveContentButton}
                            onPress={handleShowImage}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.sensitiveContentButtonText}>Ver imagem</Text>
                        </TouchableOpacity>
                    </Animated.View>
                ) : (
                    <Animated.View style={{ opacity: imageOpacity }}>
                        <Image
                            source={iconsImage[name]}
                            style={[styles.image, styles.sensitiveContentImageWrapper]}
                        />
                    </Animated.View>
                )}
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
