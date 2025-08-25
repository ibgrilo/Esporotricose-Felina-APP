import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "../styles";
import { buttonSizes } from "../styles";

const AccordionItem = ({ keyId, icon, title, description, expanded, onPress }) => {
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
            styles.accordionCard,
            { transform: [{ scale: scaleValue }] }
        ]}>
            <TouchableOpacity
                style={[
                    styles.howToDealCard,
                    expanded ? styles.cardActive : styles.cardInactive
                ]}
                activeOpacity={0.95}
                onPress={handlePress}
            >
                <View style={[
                    styles.howToDealIconContainer,
                    expanded ? styles.iconActive : styles.iconInactive,
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
                    <View style={styles.headerContainer}>
                        <Text style={[
                            styles.howToDealTitle,
                            expanded ? styles.titleActive : styles.titleInactive,
                            { flex: 1 }
                        ]}>
                            {title}
                        </Text>

                        <Animated.View style={[
                            styles.arrowWrapper,
                            { transform: [{ rotate: rotateInterpolation }] }
                        ]}>
                            <View style={expanded ? styles.arrowActive : styles.arrowInactive}>
                                <Text style={expanded ? styles.arrowTextActive : styles.arrowTextInactive}>
                                    ▶
                                </Text>
                            </View>
                        </Animated.View>
                    </View>

                    <Animated.View style={[
                        styles.contentWrapper,
                        {
                            height,
                            opacity,
                            transform: [{ translateY }],
                        }
                    ]}>
                        <View style={styles.contentBorder}>
                            <Text style={[styles.howToDealDescription, styles.descriptionStyle]}>
                                {description}
                            </Text>
                        </View>
                    </Animated.View>

                    <View
                        style={styles.hiddenMeasurer}
                        onLayout={(e) => {
                            const h = e.nativeEvent.layout.height;
                            if (h > 0 && h !== contentHeight) {
                                setContentHeight(h);
                            }
                        }}
                    >
                        <View style={styles.contentBorder}>
                            <Text style={[styles.howToDealDescription, styles.descriptionStyle]}>
                                {description}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

const AccordionCard = ({ data }) => {
    const [expanded, setExpanded] = useState(null);

    // console.log("AccordionCard recebeu data:", data);
    // console.log("AccordionCard data type:", typeof data);
    // console.log("AccordionCard data keys:", data ? Object.keys(data) : 'undefined');
    
    if (!data) {
        return (
            <View style={{ padding: 20 }}>
                <Text>Nenhum dado disponível</Text>
            </View>
        );
    }

    const dataEntries = Object.entries(data);
    console.log("AccordionCard entries:", dataEntries);

    return (
        <View>
            {dataEntries.map(([key, item]) => {
                console.log("Renderizando item:", key, item);
                return (
                    <AccordionItem
                        key={key}
                        keyId={key}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        expanded={expanded === key}
                        onPress={() => {
                            console.log("Pressionado:", key);
                            if (expanded === key) {
                                setExpanded(null);
                            } else {
                                setExpanded(key);
                            }
                        }}
                    />
                );
            })}
        </View>
    );
};

export default AccordionCard;