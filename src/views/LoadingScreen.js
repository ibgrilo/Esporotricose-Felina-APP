import React, { useEffect } from "react";
import SVGComponent from "../assets/svg/SVGComponent";
import { View, ActivityIndicator, Text, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../styles";
import colors from "../theme/colors";

const LoadingScreen = ({ onFinish }) => {
    useEffect(() => {
        // Delay mínimo para garantir que a loading seja visível
        const timer = setTimeout(() => {
            if (onFinish) {
                onFinish();
            }
        }, 1500); // 1.5 segundos - tempo mínimo para ver a loading

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <LinearGradient
                colors={['#f5f5f5', colors.primaryTransparent20]}
                style={styles.loadingScreenContainerFullScreen}
            >
                {/* Logo do gato */}
                <View style={styles.loadingLogoContainer}>
                    <SVGComponent name="LoadingLogo" />
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