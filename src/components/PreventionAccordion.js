import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "../styles";
import { buttonSizes } from "../styles";

const PreventionCard = ({ keyId, icon, title, description, expanded, onPress }) => {
    const animation = useRef(new Animated.Value(0)).current;
    const [scaleValue] = useState(new Animated.Value(1));
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        Animated.timing(animation, {
            toValue: expanded ? 1 : 0,
            duration: 250,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
        }).start();
    }, [expanded]);

    const handlePress = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 0.96,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();

        onPress();
    };

    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight],
    });

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 0],
    });

    const rotateInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    });

    return (
        <Animated.View style={[
            styles.preventionAccordionCard,
            { transform: [{ scale: scaleValue }] }
        ]}>
            <TouchableOpacity
                style={[
                    styles.howToDealCard,
                    expanded ? styles.preventionCardActive : styles.preventionCardInactive
                ]}
                activeOpacity={0.95}
                onPress={handlePress}
            >
                <View style={[
                    styles.howToDealIconContainer,
                    expanded ? styles.preventionIconActive : styles.preventionIconInactive,
                    { transform: [{ scale: expanded ? 1.1 : 1 }] }
                ]}>
                    <Text style={[
                        styles.howToDealIcon,
                        { fontSize: expanded ? buttonSizes * 0.13 : buttonSizes * 0.118 }
                    ]}>
                        {icon}
                    </Text>
                </View>

                <View style={[styles.howToDealTextContainer, { flex: 1 }]}>
                    <View style={styles.preventionHeaderContainer}>
                        <Text style={[
                            styles.howToDealTitle,
                            expanded ? styles.preventionTitleActive : styles.preventionTitleInactive,
                            { flex: 1 }
                        ]}>
                            {title}
                        </Text>

                        <Animated.View style={[
                            styles.preventionArrowWrapper,
                            { transform: [{ rotate: rotateInterpolation }] }
                        ]}>
                            <View style={expanded ? styles.preventionArrowActive : styles.preventionArrowInactive}>
                                <Text style={expanded ? styles.preventionArrowTextActive : styles.preventionArrowTextInactive}>
                                    ▶
                                </Text>
                            </View>
                        </Animated.View>
                    </View>

                    <Animated.View style={[
                        styles.preventionContentWrapper,
                        {
                            height,
                            opacity,
                            transform: [{ translateY }],
                        }
                    ]}>
                        <View style={styles.preventionContentBorder}>
                            <Text style={[styles.howToDealDescription, styles.preventionDescriptionStyle]}>
                                {description}
                            </Text>
                        </View>
                    </Animated.View>

                    <View
                        style={styles.preventionHiddenMeasurer}
                        onLayout={(e) => {
                            const h = e.nativeEvent.layout.height;
                            if (h > 0 && h !== contentHeight) {
                                setContentHeight(h);
                            }
                        }}
                    >
                        <View style={styles.preventionContentBorder}>
                            <Text style={[styles.howToDealDescription, styles.preventionDescriptionStyle]}>
                                {description}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

const PreventionAccordion = ({ data }) => {
    const [expanded, setExpanded] = useState(null);

    return (
        <View>
            {Object.entries(data).map(([key, { icon, title, description }]) => (
                <PreventionCard
                    key={key}
                    keyId={key}
                    icon={icon}
                    title={title}
                    description={description}
                    expanded={expanded === key}
                    onPress={() => {
                        if (expanded === key) {
                            setExpanded(null);
                        } else {
                            setExpanded(key);
                        }
                    }}
                />
            ))}
        </View>
    );
};

export default PreventionAccordion;