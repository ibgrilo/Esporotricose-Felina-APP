const sintomas = {
    dificuldadeParaRespirar: {
        nome: "Dificuldade para respirar",
        descricao: "Esforço para respirar, respiração acelerada e/ou chiados no tórax.",
        sistemaAssociado: "Sistema respiratório",
        extendido: "A respiração se torna trabalhosa devido à inflamação nas vias aéreas e nos pulmões, fazendo com que o gato respire de forma ofegante, acelerada ou com sons como chiados e roncos.",
        dicasECuidados: "🏥 Dificuldade respiratória é uma emergência! Transporte o animal de forma rápida e segura ao veterinário.\n\n🧤 Utilize equipamentos de proteção individual (EPI) como luvas ao manuseá-lo, evitando estresse adicional que possa piorar o quadro respiratório."
    },
    secrecoesNasais: {
        nome: "Secreções nasais",
        descricao: "Transparente e fluida no início da infecção, mas tende a evoluir para uma cor amarelada ou esverdeada com consistência espessa. Em casos graves, pode vir misturada com sangue, apresentando uma cor avermelhada.",
        sistemaAssociado: "Sistema respiratório",
        extendido: "Espirros frequentes e secreção persistente indicam inflamação nas vias aéreas. A secreção pode dificultar a respiração e piorar com infecções secundárias, mudando de cor e espessura.",
        dicasECuidados: "🧴 Evite limpar agressivamente a região nasal. Se possível, mantenha o animal em ambiente limpo e ventilado.\n\n🧤 Ao realizar qualquer manuseio, utilize luvas e encaminhe o gato ao veterinário para diagnóstico e tratamento adequados."
    },
    tosse: {
        nome: "Tosse",
        descricao: "Pode ser rouca, parecendo com um engasgo, ou vir acompanhada de secreção.",
        sistemaAssociado: "Sistema respiratório",
        extendido: "A tosse é um reflexo irritativo causado pela inflamação ou presença de secreção nos pulmões e vias aéreas. Pode soar seca, como engasgo, ou úmida, com muco.",
        dicasECuidados: "💨 Evite exposição a poeira ou agentes irritantes que possam agravar a tosse.\n\n🧤 Sempre use EPI (luvas) ao manusear o animal e busque atendimento veterinário se a tosse persistir ou piorar."
    },
    fadigaELetargia: {
        nome: "Fadiga e letargia",
        descricao: "Cansaço excessivo e falta de energia por baixa oxigenação.",
        sistemaAssociado: "Sistema respiratório",
        extendido: "Com a redução da oxigenação, o gato se torna menos ativo, podendo dormir excessivamente, evitar brincadeiras ou atividades normais e demonstrar fraqueza generalizada.",
        dicasECuidados: "🛌 Ofereça um ambiente calmo e seguro para descanso, sem estresse ou agitação.\n\n🧤 Utilize EPI ao manusear o animal e encaminhe-o ao veterinário para avaliação da condição respiratória."
    },
    inflacaoDosLinfonodos: {
        nome: "Inflamação dos linfonodos",
        descricao: "Os linfonodos ficam inchados e palpáveis, podem chegar a ulcerar e liberar pus.",
        sistemaAssociado: "Sistema linfático",
        extendido: "Os linfonodos aumentam de tamanho em resposta à infecção, ficando visivelmente inchados. Em casos avançados, podem se romper, formando feridas com secreção purulenta.",
        dicasECuidados: "🚑 Ao identificar inchaço ou secreções nos linfonodos, evite apertar ou manipular as áreas afetadas.\n\n🧤 Manuseie o animal usando luvas e procure atendimento veterinário para avaliação e tratamento adequado."
    },
    dificuldadeDeLocomocao: {
        nome: "Dificuldade de locomoção",
        descricao: "O animal pode evitar colocar a pata no chão e claudicar (mancar).",
        sistemaAssociado: "Sistema locomotor",
        extendido: "O gato pode apresentar dor ao andar, evitar apoiar uma das patas ou mancar, como consequência de inflamação articular ou óssea, causando desconforto ao se movimentar.",
        dicasECuidados: "🚗 Transporte o animal com cuidado, evitando forçar a movimentação da pata afetada.\n\n🧤 Utilize EPI ao manipular o animal e leve-o ao veterinário para avaliação da origem da dor."
    },
    artrite: {
        nome: "Artrite",
        descricao: "Inflamação nas articulações (juntas), com inchaço e dor.",
        sistemaAssociado: "Sistema locomotor",
        extendido: "A artrite provoca dor e rigidez nas articulações, dificultando o movimento. O local pode apresentar inchaço, calor e sensibilidade ao toque, afetando a qualidade de vida do animal.",
        dicasECuidados: "🛡️ Evite forçar movimentações e mantenha o animal em local confortável e seguro.\n\n🧤 Utilize EPI ao realizar manuseio e procure orientação veterinária para iniciar o tratamento anti-inflamatório apropriado."
    },
    osteomielite: {
        nome: "Osteomielite",
        descricao: "É uma infecção nos ossos. Além de dor, o animal pode apresentar inchaço e deformidade na região afetada e enfraquecimento dos ossos, levando-o a quebrar com mais facilidade.",
        sistemaAssociado: "Sistema locomotor",
        extendido: "A infecção óssea compromete a estrutura do osso, causando dor intensa, inchaço e, em casos graves, deformidades. O osso afetado pode enfraquecer e fraturar com facilidade.",
        dicasECuidados: "🦴 Manuseie o animal com extrema cautela para evitar fraturas em ossos fragilizados.\n\n🧤 O uso de EPI é indispensável, e o transporte ao veterinário deve ser realizado o quanto antes."
    },
    alteracoesComportamentais: {
        nome: "Alterações comportamentais",
        descricao: "O animal pode dormir mais ou menos que o normal, ficar mais agressivo ou se isolar.",
        sistemaAssociado: "Sistema nervoso",
        extendido: "Essas alterações incluem mudanças repentinas no comportamento habitual do gato, como agressividade, apatia, excesso ou falta de sono, e isolamento social, podendo indicar desconforto ou dor.",
        dicasECuidados: "🧠 Respeite o espaço do animal, evitando forçar aproximações que possam gerar estresse.\n\n🧤 Sempre use EPI ao interagir e leve o animal para avaliação veterinária, principalmente em casos de comportamento agressivo."
    },
    convulsoes: {
        nome: "Convulsões",
        descricao: "O animal apresenta movimentos involuntários, como tremores e salivação excessiva. Pode fazer ruídos durante a crise e perder a consciência. Após a convulsão, o gato pode ficar desorientado.",
        sistemaAssociado: "Sistema nervoso",
        extendido: "Durante uma convulsão, o gato pode apresentar tremores, salivação, vocalização e perda de consciência. Após o episódio, pode ficar desorientado, cambaleante ou assustado por um tempo.",
        dicasECuidados: "🚑 Durante uma convulsão, mantenha o ambiente seguro, afastando objetos perigosos, e não tente segurar o animal.\n\n🧤 Após a crise, use EPI para manusear o gato e leve-o imediatamente ao veterinário."
    },
    dificuldadeMotora: {
        nome: "Dificuldade motora",
        descricao: "O animal pode andar cambaleando (como se estivesse tonto), ter dificuldade para reconhecer os ambientes, ter fraqueza ou enrijecimento das patas e/ou tremores.",
        sistemaAssociado: "Sistema nervoso",
        extendido: "O comprometimento neurológico pode afetar a coordenação motora, resultando em marcha cambaleante, fraqueza muscular, tremores ou dificuldade para se orientar no ambiente.",
        dicasECuidados: "🦴 Transporte o animal com delicadeza, evitando quedas ou acidentes devido à instabilidade.\n\n🧤 Utilize luvas para o manuseio e procure avaliação veterinária especializada para determinar o tratamento necessário."
    },
};

export default sintomas;
