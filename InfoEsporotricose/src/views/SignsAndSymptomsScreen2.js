import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import styles from "../styles";
import SignsAndSymptomsPanel from "../components/SignsAndSymptomsPanel";
import visibleSymptoms from "../data/visibleSymptoms";
import invisibleSymptoms from "../data/invisibleSymptoms";
import FixedLogo from "../components/FixedLogo";

const renderSymptoms = (symptomsData, types, includeSystem = false) => (
    <ScrollView>
        <View style={styles.containerSignAndSymptomsMenu2}>
            {Object.keys(symptomsData).map((chave) => (
                <SignsAndSymptomsPanel
                    key={chave}
                    name={symptomsData[chave].nome}
                    description={symptomsData[chave].descricao}
                    types={types}
                    system={includeSystem ? symptomsData[chave].sistemaAssociado : undefined}
                />
            ))}
        </View>
    </ScrollView>
);

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
            return renderSymptoms(visibleSymptoms, [1, 2]);
        case "InvisibleSign":
            return renderSymptoms(invisibleSymptoms, [3, 2], true);
        default:
            return null;
    }
};
