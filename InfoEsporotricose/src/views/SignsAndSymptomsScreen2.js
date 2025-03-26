import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import styles from "../styles";
import colors from "../theme/colors";
import SignsAndSymptomsPanel from "../components/SignsAndSymptomsPanel";
import sintomas from "../data/visibleSymptoms";

export default ({ navigation, route }) => {

    //Muda o título do header conforme a opção de menu selecionada
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
        navigation.setOptions({ title: title });
    }, [route.params, navigation]);

    return (
        <ScrollView>
            <View style={styles.containerSignAndSymptomsMenu2}>
                {Object.keys(sintomas).map((chave) => (
                    <SignsAndSymptomsPanel
                        key={chave}
                        name={sintomas[chave].nome}
                        description={sintomas[chave].descricao}
                    />
                ))}
            </View>
        </ScrollView>
    );
};
