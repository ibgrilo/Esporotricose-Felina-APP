import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const VetResultBanner = ({ count, visible }) => {
    if (!visible || count === 0) return null;

    const plural = count > 1;
    const message = `${count} veterinário${plural ? "s" : ""} próximo${plural ? "s" : ""} encontrado${plural ? "s" : ""}.`;

    return (
        <View style={styles.resultCountBanner}>
            <Text style={styles.resultCountText}>{message}</Text>
        </View>
    );
};

export default VetResultBanner;
