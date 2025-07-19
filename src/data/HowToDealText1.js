import React from "react";
import { View, Text } from "react-native";
import styles from "../styles"
import { buttonSizes } from "../styles";

export default props => (
    <View style={{ marginBottom: buttonSizes * 0.15 }}>
        {/* Card Isolar */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🐱</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Isole o seu gato</Text>
                <Text style={styles.howToDealDescription}>
                    Mantenha o seu felino em um ambiente limpo e longe de outros animais e pessoas.
                </Text>
            </View>
        </View>

        {/* Card Proteger */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🧤</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Proteja-se</Text>
                <Text style={styles.howToDealDescription}>
                    Use luvas para manusear seu gato e evite contato direto com as lesões.
                </Text>
            </View>
        </View>

        {/* Card Veterinário */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🏥</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Procure um veterinário</Text>
                <Text style={styles.howToDealDescription}>
                    Leve o seu animal para uma avaliação veterinária, assim o médico veterinário pode
                    confirmar a doença e indicar o melhor tratamento.
                </Text>
            </View>
        </View>

        {/* Card Tratamento */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>💊</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Inicie o tratamento</Text>
                <Text style={styles.howToDealDescription}>
                    O veterinário prescreverá antifúngicos. Siga a sua orientação e nunca interrompa
                    o tratamento por conta própria.
                </Text>
            </View>
        </View>

        {/* Card Higiene */}
        <View style={styles.howToDealCard}>
            <View style={styles.howToDealIconContainer}>
                <Text style={styles.howToDealIcon}>🧼</Text>
            </View>
            <View style={styles.howToDealTextContainer}>
                <Text style={styles.howToDealTitle}>Higiene</Text>
                <Text style={styles.howToDealDescription}>
                    Limpe regularmente o ambiente com produtos antifúngicos, lave bem as mãos após lidar
                    com o gato doente ou com objetos que ele utiliza.
                </Text>
            </View>
        </View>

        {/* Card de Alerta */}
        <View style={styles.alertCard}>
            <Text style={styles.alertIcon}>⚠️</Text>
            <Text style={styles.alertText}>
                NUNCA ABANDONE UM ANIMAL DOENTE!
            </Text>
        </View>
    </View>
)