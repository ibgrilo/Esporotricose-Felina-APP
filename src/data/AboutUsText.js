import React from 'react';
import { Text, View } from 'react-native';
import styles, { buttonSizes } from '../styles';

const AboutUsText = () => {
    return (
        <View>
            <Text style={styles.titleFromAboutUs}>Finalidade</Text>
            <Text style={styles.textFromAboutUs}>
                description: `
                O aplicativo "EsporoVet" tem como principal finalidade fornecer informações educativas sobre a esporotricose felina, uma doença fúngica que afeta gatos e pode ser transmitida a humanos.
            </Text>
            <Text style={styles.textFromAboutUs}>
                A plataforma visa conscientizar tutores, veterinários e profissionais da área de saúde sobre os sinais clínicos, diagnóstico, tratamento e prevenção da doença, promovendo uma abordagem de Saúde Única e contribuindo para o bem-estar animal e humano.
            </Text>

            <Text style={styles.titleFromAboutUs}>Público-Alvo</Text>
            <Text style={styles.textFromAboutUs}>
                O aplicativo destina-se a diferentes grupos de usuários:
            </Text>
            <Text style={styles.listItemFromAboutUs}>• <Text style={styles.boldFromAboutUs}>Tutores de animais:</Text> para que possam identificar precocemente os sinais da esporotricose e buscar atendimento veterinário adequado.</Text>
            <Text style={styles.listItemFromAboutUs}>• <Text style={styles.boldFromAboutUs}>Profissionais veterinários:</Text> como uma ferramenta complementar de referência sobre diagnóstico e tratamento.</Text>
            <Text style={styles.listItemFromAboutUs}>• <Text style={styles.boldFromAboutUs}>Estudantes de Medicina Veterinária:</Text> como material de apoio educativo.</Text>
            <Text style={styles.listItemFromAboutUs}>• <Text style={styles.boldFromAboutUs}>Agentes comunitários de saúde:</Text> para auxiliar na disseminação de informação e controle da doença em comunidades.</Text>

            <Text style={styles.titleFromAboutUs}>Funcionalidades do Aplicativo</Text>
            <Text style={styles.listItemFromAboutUs}>• Banco de dados atualizado com informações sobre esporotricose felina.</Text>
            <Text style={styles.listItemFromAboutUs}>• Interface intuitiva para fácil acesso às informações.</Text>
            <Text style={styles.listItemFromAboutUs}>• Seções interativas sobre sinais clínicos, prevenção e tratamento.</Text>
            <Text style={styles.listItemFromAboutUs}>• Orientações sobre quando buscar ajuda veterinária.</Text>
            <Text style={styles.listItemFromAboutUs}>• Recursos para divulgação e conscientização em comunidades.</Text>

            <Text style={styles.titleFromAboutUs}>Impacto Esperado</Text>
            <Text style={styles.textFromAboutUs}>
                Com a implementação deste aplicativo, espera-se reduzir o tempo entre a aparição dos sinais e o início do tratamento, aumentando as chances de recuperação dos animais afetados.
            </Text>
            <Text style={styles.textFromAboutUs}>
                Ademais, o "EsporoVet" contribuirá para a capacitação de profissionais e estudantes da área veterinária, além de aumentar a conscientização da população sobre a importância do manejo adequado da doença.
            </Text>
            <Text style={styles.textFromAboutUs}>
                O projeto também servirá como referência para outras iniciativas de extensão voltadas para a Saúde Única e bem-estar animal.
            </Text>

            <Text style={styles.titleFromAboutUs}>Projeto de Extensão</Text>
            <Text style={styles.textFromAboutUs}>
                Este aplicativo foi desenvolvido no âmbito do projeto de extensão universitária "Esporotricose Felina: Promovendo Saúde Única e Bem-Estar Animal na Comunidade", aprovado pelo Edital FAPEMA Nº 02/2024 - Apoio a Projetos de Extensão.
            </Text>
            <Text style={styles.textFromAboutUs}>
                A iniciativa é coordenada pela Profa. Dra. Larissa Sarmento dos Santos Ribeiro e integra ações da Universidade Estadual do Maranhão (UEMA), voltadas para a educação, conscientização e promoção da saúde animal e humana.
            </Text>
            <Text style={styles.textFromAboutUs}>
                O desenvolvimento do aplicativo "EsporoVet" teve como objetivo principal fornecer uma ferramenta educativa para facilitar a identificação dos sinais clínicos da esporotricose felina, orientar sobre o diagnóstico e tratamento precoce, e disseminar informações de prevenção à comunidade.
            </Text>

            <Text style={styles.titleFromAboutUs}>Créditos</Text>
            <Text style={styles.textFromAboutUs}>
                Equipe responsável pelo projeto:
            </Text>
            <Text style={styles.listItemFromAboutUs}>• Igor Barros Grilo</Text>
            <Text style={styles.listItemFromAboutUs}>• Yanna Leidy Ketley Fernandes Cruz</Text>
            <Text style={styles.listItemFromAboutUs}>• Thaís Camila Pereira Veloso</Text>
            <Text style={styles.listItemFromAboutUs}>• Larissa Sarmento dos Santos Ribeiro</Text>

            <Text style={styles.textFromAboutUs}>
                Projeto desenvolvido em parceria entre o <Text style={styles.boldFromAboutUs}>Laboratório de Aquisição de Processamento de Sinais (LAPS)</Text> e o <Text style={styles.boldFromAboutUs}>Laboratório de Micologia</Text>, ambos vinculados à <Text style={styles.boldFromAboutUs}>Universidade Estadual do Maranhão (UEMA)</Text>.{"\n\n"}
                Projeto financiado pela <Text style={styles.boldFromAboutUs}>Fundação de Amparo à Pesquisa e ao Desenvolvimento Científico e Tecnológico do Maranhão (FAPEMA)</Text>.
            </Text>
        </View>
    );
};

export default AboutUsText;
