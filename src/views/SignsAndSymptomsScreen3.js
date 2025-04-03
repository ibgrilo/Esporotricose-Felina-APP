import React, { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import SVGComponent from "../assets/svg/SVGComponent";
import styles from "../styles";

export default (props) => {
    const { name, description, types, system, extended } = props.route.params;
    function chooseMainIcons(system) {
        let iconNames;
        switch (system) {
            case "Sistema respiratório":
                iconNames = ["BigLung", "RespiratorySystemSymptoms"]
                break;
            case "Sistema linfático":
                iconNames = ["BigMushroom", "LymphaticSystemSymptoms"];
                break;
            case "Sistema locomotor":
                iconNames = ["BigPaw", "LocomotorSystemSymptoms"];
                break;
            case "Sistema nervoso":
                iconNames = ["BigBrain", "NervousSystemSymptoms"];
                break;
            default:
                iconNames = null
                break;
        }
        return iconNames
    }

    const iconNames = chooseMainIcons(system);
    if (system != null) {
        return (
            <ScrollView>
                <View style={styles.firstIconContainer}>
                    <SVGComponent name={iconNames[0]} />
                </View>

                <View style={styles.firstTitlePanel}>
                    <Text style={styles.firstTitleText}>{name}</Text>
                </View>

                <View style={styles.mainTextPanel}>
                    <Text style={styles.extendedText}>{extended}</Text>
                </View>

                <View style={styles.firstTitlePanel}>
                    <Text style={styles.firstTitleText}>Áreas afetadas</Text>
                </View>

                <View style={styles.secondIconContainer} >
                    <SVGComponent name={iconNames[1]} />
                </View>

                <View style={styles.secondTitlePanel}>
                    <Text style={styles.secondTitleText}>{system}</Text>
                </View>
            </ScrollView >
        );
    }

    return (
        <View>

        </View>
    )
};
