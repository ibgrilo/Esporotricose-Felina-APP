const sintomas = {
    ulceraNaPele: {
        nome: "Úlceras na Pele",
        descricao: "Feridas com bordas elevadas e que não cicatrizam facilmente, geralmente na cabeça, nos membros ou na cauda.",
        regioesAfetadas: ["Cabeça", "Membros", "Cauda"],
        dicasECuidados:
            "🧼 Mantenha a ferida limpa utilizando soro fisiológico.\n\n" +
            "🧤 Durante o manuseio, recomenda-se o uso de equipamentos de proteção individual, como luvas, para evitar o risco de contaminação.\n\n" +
            "🚑 Procure atendimento veterinário o mais rápido possível para início do tratamento adequado."
    },
    nodulosEAbscessos: {
        nome: "Nódulos e Abscessos",
        descricao: "Áreas inchadas e doloridas que podem ulcerar.",
        regioesAfetadas: ["Cabeça", "Pescoço", "Patas", "Tronco", "Cauda", "Membros"],
        dicasECuidados:
            "🙅‍♂️ Evite manipular ou comprimir os nódulos.\n\n" +
            "🧤 Utilize equipamentos de proteção individual, como luvas, ao lidar com o animal.\n\n" +
            "🚗 Transporte-o cuidadosamente até um serviço veterinário para avaliação clínica e início da terapia."
    },
    secrecaoPurulenta: {
        nome: "Secreção Purulenta",
        descricao: "Saída de pus das lesões, podendo indicar infecção bacteriana.",
        regioesAfetadas: ["Cabeça", "Patas", "Tronco", "Membros"],
        dicasECuidados:
            "🧴 Higienize as áreas afetadas com soro fisiológico, se possível, sem aplicar pressão.\n\n" +
            "🧤 Sempre faça o manejo do animal utilizando luvas para reduzir o risco de infecção cruzada.\n\n" +
            "🛡️ Isolar o animal é importante para prevenir a transmissão da doença."
    },
    disseminacaoDasLesoes: {
        nome: "Disseminação das Lesões",
        descricao: "Em casos graves, as lesões podem se espalhar por todo o corpo do animal.",
        regioesAfetadas: ["Cabeça", "Pescoço", "Patas", "Tronco", "Cauda", "Membros"],
        dicasECuidados:
            "🚨 Trata-se de uma situação de emergência.\n\n" +
            "🧤 Ao manusear o animal, utilize luvas e outros equipamentos de proteção individual para sua segurança.\n\n" +
            "🏥 Procure atendimento veterinário imediatamente e mantenha o animal isolado de outros animais e crianças."
    }
};

export default sintomas;
