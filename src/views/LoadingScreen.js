import React from "react";
import SVGComponent from "../assets/svg/SVGComponent";
import { View, ActivityIndicator, Text, StatusBar, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../styles";
import colors from "../theme/colors";

const LoadingScreen = ({ onFinish }) => {
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <LinearGradient
                colors={['#f5f5f5', colors.primaryTransparent20]}
                style={styles.loadingScreenContainerFullScreen}
            >
                {/* Logo do gato */}
                <View style={styles.loadingLogoContainer}>
                    <Image
                        source={require("../assets/images/logo/loadingLogo.png")}
                        style={styles.loadingLogoImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Título */}
                <Text style={styles.loadingTitle}>EsporoVet</Text>

                {/* Subtítulo */}
                <View style={styles.loadingSubtitleContainer}>
                    <Text style={styles.loadingSubtitle}>Um guia sobre a </Text>
                    <Text style={styles.loadingSubtitleHighlight}>Esporotricose felina</Text>
                </View>

                {/* Loading indicator */}
                <ActivityIndicator
                    size="large"
                    color={colors.primary}
                    style={styles.loadingSpinner}
                />
            </LinearGradient>
        </>
    );
};

export default LoadingScreen;