import React, { useEffect, useState } from "react";
import SVGComponent from "../assets/svg/SVGComponent";
import { View, ActivityIndicator, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../styles";
import colors from "../theme/colors";

const LoadingScreen = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onFinish) {
                onFinish();
            }
        }, 3000); // 3 segundos

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <LinearGradient
            colors={['#f5f5f5', colors.primaryTransparent20]}
            style={styles.loadingScreenContainer}
        >
            {/* Logo do gato */}
            <View style={styles.loadingLogoContainer}>
                <SVGComponent name="LoadingLogo" />
            </View>

            {/* Título */}
            <Text style={styles.loadingTitle}>InfoEsporotricose</Text>

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
    );
};

export default LoadingScreen;