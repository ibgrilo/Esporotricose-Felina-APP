import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "../styles"

export default props => (
    <ScrollView style={styles.scrollContainer}>
        <Text style={styles.description}>
            A esporotricose felina é transmitida principalmente pela inoculação do fungo
            <Text style={styles.italic}> Sporothrix sp.</Text> na pele. Pequenas ações podem evitá-la:
        </Text>
        <View style={styles.section}>
            <Text style={styles.titleFromPrevention}>🐱 Castre seu gato:</Text>
            <Text style={styles.text}>
                A castração é muito importante, pois diminui comportamentos de risco, como brigas por território e por fêmeas, e deslocamentos por grandes áreas.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleFromPrevention}>🏠 Mantenha seu gato em local seguro:</Text>
            <Text style={styles.text}>
                Animais que vivem em casa têm uma chance menor de serem expostos ao fungo através do solo contaminado ou do contato com animais doentes.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleFromPrevention}>🚫 Evite contato com gatos errantes:</Text>
            <Text style={styles.text}>
                Contato com animais de rua pode expor o seu gato ao fungo causador da esporotricose. Em caso de resgate, mantenha o animal isolado até a avaliação por um médico veterinário.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleFromPrevention}>🎾 Enriquecimento ambiental:</Text>
            <Text style={styles.text}>
                Gatos estressados têm maior chance de desenvolver a esporotricose, por isso é importante que tenham acesso a brinquedos e arranhadores.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleFromPrevention}>🧼 Higiene ambiental:</Text>
            <Text style={styles.text}>
                Limpe regularmente os objetos e os locais onde o seu gato vive, como brinquedos, camas e caixas de areia.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleFromPrevention}>🩺 Check Up:</Text>
            <Text style={styles.text}>
                Realize avaliações veterinárias periódicas, pois é importante para a detecção precoce dos sinais clínicos da esporotricose e de outras doenças.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.textAtention}>
                Cuide do seu felino com muito amor e responsabilidade, pois a esporotricose é grave, mas pode ser previnida com simples atitutes.
            </Text>
        </View>
    </ScrollView>
)