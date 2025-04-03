const sintomas = {
    dificuldadeParaRespirar: {
        nome: "Dificuldade para respirar",
        descricao: "Esforço para respirar, respiração acelerada e/ou chiados no tórax.",
        sistemaAssociado: "Sistema respiratório",
        extendido: "A respiração se torna trabalhosa devido à inflamação nas vias aéreas e nos pulmões, fazendo com que o gato respire de forma ofegante, acelerada ou com sons como chiados e roncos."
    },
    secrecoesNasais: {
        nome: "Secreções nasais",
        descricao: "Transparente e fluida no início da infecção, mas tende a evoluir para uma cor amarelada ou esverdeada com consistência espessa. Em casos graves, pode vir misturada com sangue, apresentando uma cor avermelhada.",
        sistemaAssociado: "Sistema respiratório",
        extendido: "Espirros frequentes e secreção persistente indicam inflamação nas vias aéreas. A secreção pode dificultar a respiração e piorar com infecções secundárias, mudando de cor e espessura."
    },
    tosse: {
        nome: "Tosse",
        descricao: "Pode ser rouca, parecendo com um engasgo, ou vir acompanhada de secreção.",
        sistemaAssociado: "Sistema respiratório",
        extendido: "A tosse é um reflexo irritativo causado pela inflamação ou presença de secreção nos pulmões e vias aéreas. Pode soar seca, como engasgo, ou úmida, com muco."
    },
    fadigaELetargia: {
        nome: "Fadiga e letargia",
        descricao: "Cansaço excessivo e falta de energia por baixa oxigenação.",
        sistemaAssociado: "Sistema respiratório",
        extendido: "Com a redução da oxigenação, o gato se torna menos ativo, podendo dormir excessivamente, evitar brincadeiras ou atividades normais e demonstrar fraqueza generalizada."
    },
    inflacaoDosLinfonodos: {
        nome: "Inflamação dos linfonodos",
        descricao: "Os linfonodos ficam inchados e palpáveis, podem chegar a ulcerar e liberar pus.",
        sistemaAssociado: "Sistema linfático",
        extendido: "Os linfonodos aumentam de tamanho em resposta à infecção, ficando visivelmente inchados. Em casos avançados, podem se romper, formando feridas com secreção purulenta."
    },
    dificuldadeDeLocomocao: {
        nome: "Dificuldade de locomoção",
        descricao: "O animal pode evitar colocar a pata no chão e claudicar (mancar).",
        sistemaAssociado: "Sistema locomotor",
        extendido: "O gato pode apresentar dor ao andar, evitar apoiar uma das patas ou mancar, como consequência de inflamação articular ou óssea, causando desconforto ao se movimentar."
    },
    artrite: {
        nome: "Artrite",
        descricao: "Inflamação nas articulações (juntas), com inchaço e dor.",
        sistemaAssociado: "Sistema locomotor",
        extendido: "A artrite provoca dor e rigidez nas articulações, dificultando o movimento. O local pode apresentar inchaço, calor e sensibilidade ao toque, afetando a qualidade de vida do animal."
    },
    osteomielite: {
        nome: "Osteomielite",
        descricao: "É uma infecção nos ossos. Além de dor, o animal pode apresentar inchaço e deformidade na região afetada e enfraquecimento dos ossos, levando-o a quebrar com mais facilidade.",
        sistemaAssociado: "Sistema locomotor",
        extendido: "A infecção óssea compromete a estrutura do osso, causando dor intensa, inchaço e, em casos graves, deformidades. O osso afetado pode enfraquecer e fraturar com facilidade."
    },
    alteracoesComportamentais: {
        nome: "Alterações comportamentais",
        descricao: "O animal pode dormir mais ou menos que o normal, ficar mais agressivo ou se isolar.",
        sistemaAssociado: "Sistema nervoso",
        extendido: "Essas alterações incluem mudanças repentinas no comportamento habitual do gato, como agressividade, apatia, excesso ou falta de sono, e isolamento social, podendo indicar desconforto ou dor."
    },
    convulsoes: {
        nome: "Convulsões",
        descricao: "O animal apresenta movimentos involuntários, como tremores e salivação excessiva. Pode fazer ruídos durante a crise e perder a consciência. Após a convulsão, o gato pode ficar desorientado.",
        sistemaAssociado: "Sistema nervoso",
        extendido: "Durante uma convulsão, o gato pode apresentar tremores, salivação, vocalização e perda de consciência. Após o episódio, pode ficar desorientado, cambaleante ou assustado por um tempo."
    },
    dificuldadeMotora: {
        nome: "Dificuldade motora",
        descricao: "O animal pode andar cambaleando (como se estivesse tonto), ter dificuldade para reconhecer os ambientes, ter fraqueza ou enrijecimento das patas e/ou tremores.",
        sistemaAssociado: "Sistema nervoso",
        extendido: "O comprometimento neurológico pode afetar a coordenação motora, resultando em marcha cambaleante, fraqueza muscular, tremores ou dificuldade para se orientar no ambiente."
    },
};

export default sintomas;
