import React, { useState } from "react";
import { StatusBar } from "react-native";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles";
import itens from "../data/glossaryText";
import colors from "../theme/colors";

const Accordion = () => {
  const [expanded, setExpanded] = useState(null);

  const handlePress = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <StatusBar translucent={false} backgroundColor={colors.primary} />
      {Object.entries(itens).map(([key, { title, meaning }]) => (
        <View key={key} style={styles.accordionContainer}>
          <TouchableOpacity
            onPress={() => handlePress(key)}
            style={[
              styles.accordionHeader,
              expanded === key && styles.activeHeader,
            ]}
          >
            <Text style={title !== "Sporothrix sp." ? styles.title : styles.italicTitle}>{title}</Text>
            <Icon
              name={expanded === key ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={24}
              color={colors.surfaceWhite}
            />
          </TouchableOpacity>

          {expanded === key && (
            <View style={styles.accordionContent}>
              <Text style={styles.contentText}>{meaning}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default Accordion;