import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import styles from "../styles";
import SignsAndSymptomsPanel from "../components/SignsAndSymptomsPanel";
import visibleSymptoms from "../data/visibleSymptoms";
import invisibleSymptoms from "../data/invisibleSymptoms";
import FixedLogo from "../components/FixedLogo";

const renderSymptoms = (symptomsData, types, options = {}) => {
    const { includeExtended = false, includeSystem = false } = options;

    return (
        <ScrollView>
            <View style={styles.containerSignAndSymptomsMenu2}>
                {Object.keys(symptomsData).map((chave) => (
                    <SignsAndSymptomsPanel
                        key={chave}
                        name={symptomsData[chave].nome}
                        description={symptomsData[chave].descricao}
                        extended={includeExtended ? symptomsData[chave].extendido : null}
                        system={includeSystem ? symptomsData[chave].sistemaAssociado : null}
                        types={types}
                    />
                ))}
            </View>
        </ScrollView>
    );
};


export default ({ navigation, route }) => {

    // Muda o título do header conforme a opção de menu selecionada
    useEffect(() => {
        let title = "";
        switch (route.params) {
            case "VisibleSign":
                title = "Sinais e sintomas visíveis";
                break;
            case "InvisibleSign":
                title = "Sinais e sintomas internos";
                break;
            default:
                title = route.name;
                break;
        }
        navigation.setOptions({ title });
    }, [route.params, navigation]);

    switch (route.params) {
        case "VisibleSign":
            return renderSymptoms(visibleSymptoms, [1, 2], { includeSystem: true });

        case "InvisibleSign":
            return renderSymptoms(invisibleSymptoms, [3, 2], {
                includeExtended: true,
                includeSystem: true
            });

    }
};
