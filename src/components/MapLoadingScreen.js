import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../styles';
import colors from '../theme/colors';

const MapLoadingScreen = () => {
    return (
        <View style={styles.loadingScreenContainer}>
            <View style={styles.loadingLogoContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
            <Text style={styles.mapLoadingTitle}>
                Buscando veterinários próximos...
            </Text>
            <Text style={styles.mapLoadingSubtitle}>
                Aguarde enquanto localizamos clínicas veterinárias na sua região
            </Text>
        </View>
    );
};

export default MapLoadingScreen;
