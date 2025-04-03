import React from "react";
import { View, Text } from "react-native";
import styles from "../styles"
import { buttonSizes } from "../styles";

export default props => (
    <View style={{ marginBottom: buttonSizes * 0.15 }}>
        <View style={styles.section}>
            <Text style={styles.titleFromHowToDeal}>🐱 Isole o seu gato:</Text>
            <Text style={styles.text}>
                Mantenha o seu felino em um ambiente limpo e longe de outros animais e pessoas.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.titleFromHowToDeal}>🧤 Proteja-se:</Text>
            <Text style={styles.text}>
                Use luvas para manusear seu gato e evite contato direto com as lesões.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.titleFromHowToDeal}>🏥 Procure um veterinário:</Text>
            <Text style={styles.text}>
                Leve o seu animal para uma avaliação veterinária, assim o médico veterinário pode
                confirmar a doença e indicar o melhor tratamento.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.titleFromHowToDeal}>💊 Inicie o tratamento:</Text>
            <Text style={styles.text}>
                O veterinário prescreverá antifúngicos. Siga a sua orientação e nunca interrompa
                o tratamento por conta própria.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.titleFromHowToDeal}>🧼 Higiene:</Text>
            <Text style={styles.text}>
                Limpe regularmente o ambiente com produtos antifúngicos, lave bem as mãos após lidar
                com o gato doente ou com objetos que ele utiliza.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.textAtention}>
                NUNCA ABANDONE UM ANIMAL DOENTE!
            </Text>
        </View>
    </View>
)