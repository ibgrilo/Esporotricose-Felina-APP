import React, { useState, useRef, useEffect } from "react";
import { StatusBar, View, Text, TouchableOpacity, ScrollView, Animated, Easing, Platform, UIManager, } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles";
import itens from "../data/glossaryText";
import colors from "../theme/colors";
import FixedLogo from "../components/FixedLogo";

// Habilita LayoutAnimation no Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionItem = ({ title, meaning, expanded, onPress }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);

  // Dispara animação suave usando interpolação de altura e opacidade
  useEffect(() => {
    Animated.timing(animation, {
      toValue: expanded ? 1 : 0,
      duration: 250,
      easings: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [expanded]);

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

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.accordionHeader, expanded && styles.activeHeader]}
      >
        <Text style={title !== "Sporothrix sp." ? styles.title : styles.italicTitle}>
          {title}
        </Text>
        <Icon
          name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color={colors.surfaceWhite}
        />
      </TouchableOpacity>

      {/* Conteúdo animado */}
      <Animated.View
        style={{
          height,
          overflow: "hidden",
          opacity,
          transform: [{ translateY }],
        }}
      >
        <View style={styles.accordionContent}>
          <Text style={styles.contentText}>{meaning}</Text>
        </View>
      </Animated.View>

      {/* Medidor invisível — mede altura real mesmo fora da animação */}
      <View
        style={{
          position: "absolute",
          opacity: 0,
          zIndex: -1,
          left: 0,
          right: 0,
        }}
        onLayout={(e) => {
          const h = e.nativeEvent.layout.height;
          if (h > 0 && h !== contentHeight) {
            setContentHeight(h);
          }
        }}
      >
        <View style={styles.accordionContent}>
          <Text style={styles.contentText}>{meaning}</Text>
        </View>
      </View>
    </View>
  );
};


const Accordion = () => {
  const [expandedItems, setExpandedItems] = useState({});

  return (
    <ScrollView style={styles.scrollContainer}>
      <StatusBar translucent={false} backgroundColor={colors.primary} />
      {Object.entries(itens).map(([key, { title, meaning }]) => (
        <AccordionItem
          key={key}
          title={title}
          meaning={meaning}
          expanded={expandedItems[key] || false}
          onPress={() => {
            setExpandedItems(prev => ({
              ...prev,
              [key]: !prev[key]
            }));
          }}
        />
      ))}

    </ScrollView>
  );
};

export default Accordion;