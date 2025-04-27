const sintomas = {
    ulceraNaPele: {
        nome: "Úlceras na Pele",
        descricao: "Feridas com bordas elevadas e que não cicatrizam facilmente, geralmente na cabeça, nos membros ou na cauda.",
        regioesAfetadas: ["Cabeça", "Membros", "Cauda"],
        dicasECuidados: "🧼 Mantenha a ferida limpa e evite que o gato se lamba. 🚑 Procure atendimento veterinário rapidamente para iniciar o tratamento."
    },
    nodulosEAbscessos: {
        nome: "Nódulos e Abscessos",
        descricao: "Áreas inchadas e doloridas que podem ulcerar.",
        regioesAfetadas: ["Cabeça", "Pescoço", "Patas", "Tronco", "Cauda", "Membros"],
        dicasECuidados: "🙅‍♂️ Não aperte nem fure o nódulo. 🚗 Transporte o gato com cuidado e leve-o ao veterinário para avaliação e início da medicação."
    },
    secrecaoPurulenta: {
        nome: "Secreção Purulenta",
        descricao: "Saída de pus das lesões, podendo indicar infecção bacteriana.",
        regioesAfetadas: ["Cabeça", "Patas", "Tronco", "Membros"],
        dicasECuidados: "🧴 Higienize a região com soro fisiológico se possível. 🛡️ Isolar o animal pode prevenir contágio."
    },
    disseminacaoDasLesoes: {
        nome: "Disseminação das Lesões",
        descricao: "Em casos graves, as lesões podem se espalhar por todo o corpo do animal.",
        regioesAfetadas: ["Cabeça", "Pescoço", "Patas", "Tronco", "Cauda", "Membros"],
        dicasECuidados: "🚨 O caso é urgente! 🏥 Leve imediatamente ao veterinário e evite contato de crianças e outros animais."
    }
}
export default sintomas;
