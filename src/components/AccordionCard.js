import React, { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "../styles";
import { buttonSizes } from "../styles";

const AccordionItem = memo(({ keyId, icon, title, description, expanded, onPress }) => {
    const animation = useRef(new Animated.Value(expanded ? 1 : 0)).current;
    const [contentHeight, setContentHeight] = useState(0);

    const handlePress = useCallback(() => {
        onPress(keyId);
    }, [keyId, onPress]);

    useEffect(() => {
        Animated.timing(animation, {
            toValue: expanded ? 1 : 0,
            duration: 250,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: false,
        }).start();
    }, [expanded]);

    const interpolations = useMemo(() => ({
        height: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, contentHeight],
        }),
        opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
        rotate: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
        }),
    }), [animation, contentHeight]);

    const handleLayout = useCallback((e) => {
        const h = e.nativeEvent.layout.height;
        if (h > 0 && h !== contentHeight) {
            setContentHeight(h);
        }
    }, [contentHeight]);

    const iconContainerStyle = useMemo(() => [
        styles.howToDealIconContainer,
        expanded ? styles.iconActive : styles.iconInactive
    ], [expanded]);

    const iconTextStyle = useMemo(() => [
        styles.howToDealIcon
    ], [expanded]);

    const titleTextStyle = useMemo(() => [
        styles.howToDealTitle,
        expanded ? styles.titleActive : styles.titleInactive,
        { flex: 1 }
    ], [expanded]);

    return (
        <View style={styles.accordionCard}>
            <TouchableOpacity
                style={[
                    styles.howToDealCard,
                    expanded ? styles.cardActive : styles.cardInactive
                ]}
                activeOpacity={0.8}
                onPress={handlePress}
                disabled={false}
            >
                <View style={iconContainerStyle}>
                    <Text style={iconTextStyle}>
                        {icon}
                    </Text>
                </View>

                <View style={[styles.howToDealTextContainer, { flex: 1 }]}>
                    <View style={styles.headerContainer}>
                        <Text style={titleTextStyle}>
                            {title}
                        </Text>

                        <Animated.View style={[
                            styles.arrowWrapper,
                            { transform: [{ rotate: interpolations.rotate }] }
                        ]}>
                            <View style={expanded ? styles.arrowActive : styles.arrowInactive}>
                                <Text style={expanded ? styles.arrowTextActive : styles.arrowTextInactive}>
                                    ▶
                                </Text>
                            </View>
                        </Animated.View>
                    </View>

                    <Animated.View style={{
                        height: interpolations.height,
                        overflow: "hidden",
                        opacity: interpolations.opacity,
                    }}>
                        <View style={styles.contentBorder}>
                            <Text style={[styles.howToDealDescription, styles.descriptionStyle]}>
                                {description}
                            </Text>
                        </View>
                    </Animated.View>

                    <View
                        style={{
                            position: "absolute",
                            opacity: 0,
                            zIndex: -999,
                            left: 0,
                            right: 0,
                            pointerEvents: "none",
                        }}
                        onLayout={handleLayout}
                    >
                        <View style={styles.contentBorder}>
                            <Text style={[styles.howToDealDescription, styles.descriptionStyle]}>
                                {description}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
});

AccordionItem.displayName = 'AccordionItem';

const AccordionCard = ({ data }) => {
    const [expandedItems, setExpandedItems] = useState({});

    const handleToggle = useCallback((key) => {
        setExpandedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    }, []);

    const dataEntries = useMemo(() =>
        data ? Object.entries(data) : [],
        [data]
    );

    if (!data) {
        return (
            <View style={{ padding: 20 }}>
                <Text>Nenhum dado disponível</Text>
            </View>
        );
    }

    return (
        <View>
            {dataEntries.map(([key, item]) => (
                <AccordionItem
                    key={key}
                    keyId={key}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    expanded={expandedItems[key] || false}
                    onPress={handleToggle}
                />
            ))}
        </View>
    );
};

export default AccordionCard;