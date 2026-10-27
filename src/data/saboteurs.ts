export interface Saboteur {
  key: string;
  name: string;
  englishName: string;
  lie: string;
  lies: string[];
  shortDescription: string;
  description: string;
  characteristics: string[];
  thoughts: string[];
  feelings: string[];
  impact: string;
  survivalFunction: string;
  antidote: string;
  keySigns: string[];
  growthTip: string;
  questions: string[];
}

export interface MasterSaboteur {
  key: string;
  name: string;
  englishName: string;
  role: string;
  description: string;
  characteristics: string[];
  thoughts: string[];
  feelings: string[];
  lies: string[];
  impact: string;
  survivalFunction: string;
  antidote: string;
  growthTip: string;
}

export const MASTER_SABOTEUR: MasterSaboteur = {
  key: "judge",
  name: "O Crítico",
  englishName: "The Judge",
  role: "O Sabotador Mestre Universal",
  description:
    "Acha defeitos em si mesmo, nos outros e nas circunstâncias. Provoca a maior parte da nossa decepção, raiva, arrependimento, culpa, vergonha e ansiedade. É o maestro de todos os outros e ativa os Sabotadores cúmplices.",
  characteristics: [
    "Em si mesmo: se atormenta por erros passados e falhas atuais.",
    "Nos outros: se concentra no que está errado nos outros, em vez de apreciar as coisas boas. Faz comparações do que é superior e inferior.",
    "Circunstâncias: insiste que uma circunstância ou resultado é 'ruim' em vez de ver como dádiva e oportunidade."
  ],
  thoughts: [
    "O que há de errado comigo?",
    "O que há de errado com você?",
    "O que há de errado com a minha circunstância ou com esse resultado?"
  ],
  feelings: [
    "Toda culpa, arrependimento e decepção vêm do Crítico.",
    "Muito da raiva e da ansiedade é instigado pelo Crítico."
  ],
  lies: [
    "Se eu não pressionar, você vai ficar preguiçoso e acomodado.",
    "Se eu não punir você pelos seus erros, você não vai aprender com eles e vai repeti-los.",
    "Se eu não botar medo em você sobre maus resultados futuros, você não vai dar duro para impedir que aconteçam.",
    "Se eu não criticar os outros, você vai perder sua objetividade e não vai proteger seu interesse próprio.",
    "Se eu não fizer você se sentir mal em relação a resultados negativos, você não vai fazer nada para mudá-los."
  ],
  impact:
    "O Crítico é o Sabotador mestre e a causa original de boa parte de nossa ansiedade, aflição e sofrimento. Também é a causa raiz de muitos conflitos de relacionamento, bloqueando a capacidade de viver em paz com a realidade.",
  survivalFunction:
    "Uma tendência em reparar, exagerar e reagir ao negativo é uma estratégia de sobrevivência central. Ela reduz nossas chances de sermos surpreendidos e afetados por perigos não previstos à nossa sobrevivência física e emocional. Por causa dessa função chave, o Crítico é o Sabotador universal compartilhado por todos, independente das circunstâncias do nosso crescimento.",
  antidote:
    "Adote a Perspectiva do Sábio: troque o chicote da culpa pela curiosidade e autocompaixão. Diante de qualquer erro ou dificuldade, pergunte-se: 'Como posso transformar esse revés em uma dádiva e oportunidade de crescimento?'",
  growthTip: "O Crítico se disfarça de voz da razão para você não desarmá-lo. Lembre-se: discernimento avalia com calma; o Crítico julga com veneno."
};

export const SABOTEURS: Saboteur[] = [
  {
    key: "avoider",
    name: "O Esquivo",
    englishName: "Avoider / Evitador",
    lie: "Você é uma boa pessoa por poupar o sentimento dos outros. Nada de bom pode resultar de um conflito.",
    lies: [
      "Você é uma boa pessoa por poupar o sentimento dos outros.",
      "Nada de bom pode resultar de um conflito.",
      "É bom ser flexível.",
      "Alguém precisa ser o pacificador."
    ],
    shortDescription: "Foco no positivo e no agradável de uma forma extrema. Fuga de tarefas e conflitos difíceis e desagradáveis.",
    description:
      "Foco no positivo e no agradável de uma forma extrema. Fuga de tarefas e conflitos difíceis e desagradáveis.",
    characteristics: [
      "Evita conflitos e diz sim para coisas que não deseja realmente.",
      "Minimiza a importância de alguns problemas reais e tenta rechaçar outros.",
      "Tem dificuldade em dizer não. Resiste aos outros por meios passivo-agressivos, em vez de diretamente.",
      "Perde-se em rotinas e hábitos reconfortantes; procrastina as tarefas desagradáveis."
    ],
    thoughts: [
      "Isso é desagradável demais. Talvez, se eu deixar de lado, o problema se resolva sozinho.",
      "Se eu cuidar disso agora, vou magoar alguém. Prefiro não fazer isso.",
      "Se eu entrar em conflito com outros, posso perder minha ligação com eles.",
      "Encontrei um equilíbrio. Não quero mexer nele.",
      "Prefiro fazer as coisas do jeito que alguém quer a criar uma confusão."
    ],
    feelings: [
      "Tenta permanecer equilibrado a todo custo.",
      "Sente ansiedade silenciosa pelo que foi evitado ou procrastinado.",
      "Tem medo de que a paz conquistada com dificuldade seja interrompida.",
      "Reprime raiva e ressentimento sob uma fachada calma."
    ],
    impact:
      "Negar os conflitos e negatividades que existem impede que o Esquivo trabalhe com eles e os transforme em dádivas. Sentir-se entorpecido para a dor é diferente de saber como colher sabedoria e poder da dor. O que é evitado não desaparece e acaba infeccionando. Os relacionamentos são mantidos em um nível superficial por meio da fuga de conflitos. O nível de confiança dos outros é reduzido porque eles não sabem ao certo quando a informação negativa está sendo omitida.",
    survivalFunction:
      "O Esquivo pode surgir tanto de uma infância feliz quanto de uma infância difícil. Em uma infância feliz, a criança pode não ter aprendido a flexibilidade de lidar com emoções difíceis. Em uma infância de altos conflitos e tensão, o Esquivo pode surgir para bancar o pacificador e aprender a não acrescentar negatividade ou tensão próprias às tensões familiares já existentes.",
    antidote:
      "Encare as conversas difíceis como um ato de respeito e clareza. Pratique a verdade com compaixão e resolva o desconforto nos primeiros minutos antes que ele vire uma crise prolongada.",
    keySigns: [
      "Dizer 'sim' querendo dizer 'não' para evitar desconforto",
      "Procrastinar tarefas importantes refugiando-se em rotinas fáceis",
      "Engolir descontentamentos até explodir de forma passivo-agressiva",
      "Ilusão de que problemas ignorados desaparecem sozinhos"
    ],
    growthTip: "A verdadeira harmonia não é a ausência de conflito, mas a presença de honestidade e resolução madura.",
    questions: [
      "Você costuma adiar tarefas difíceis, burocráticas ou desagradáveis até o limite do prazo?",
      "Você evita conversas difíceis ou confrontos diretos, mesmo quando eles são essenciais para resolver um problema?",
      "Você se pega torcendo para que conflitos ou pendências se dissolvam sozinhos sem precisar se indispor?",
      "Você sente grande alívio quando consegue repassar uma responsabilidade incômoda para outra pessoa?",
      "Você tende a minimizar problemas reais e focar apenas no que é agradável para não lidar com o desconforto?"
    ]
  },
  {
    key: "controller",
    name: "O Controlador",
    englishName: "Controller",
    lie: "Sem mim, você não consegue fazer muita coisa. Se eu não controlar, serei controlado.",
    lies: [
      "Sem mim, você não consegue fazer muita coisa. Você precisa forçar as pessoas.",
      "Se eu não controlar, serei controlado, e não consigo suportar isso.",
      "Estou tentando terminar o serviço por todos nós."
    ],
    shortDescription: "Necessidade baseada em ansiedade de assumir a responsabilidade e controlar situações, forçando as ações das pessoas à sua própria vontade.",
    description:
      "Necessidade baseada em ansiedade de assumir a responsabilidade e controlar situações, forçando as ações das pessoas à sua própria vontade. Resulta em alta ansiedade e impaciência quando não é possível.",
    characteristics: [
      "Forte necessidade de controlar e assumir responsabilidade.",
      "Conecta-se com outros por meio de competição, desafio, atos físicos ou conflitos, em vez de por emoções mais delicadas.",
      "Determinado, confrontador e direto. Leva as pessoas além de suas zonas de conforto.",
      "Ganha vida quando faz o impossível e contraria a probabilidade.",
      "Estimulado por conflitos e conectado por meio deles. Surpreso por os outros se magoarem.",
      "Intimida os outros. A comunicação direta é interpretada pelos outros como raiva ou crítica."
    ],
    thoughts: [
      "Estou no controle ou fora de controle. Se eu trabalhar com afinco o bastante, posso e devo controlar a situação para que transcorra como quero.",
      "Os outros querem e precisam que eu assuma o controle. Estou fazendo um favor para eles.",
      "Ninguém me diz o que fazer."
    ],
    feelings: [
      "Sente alta ansiedade quando as coisas não transcorrem como ele quer.",
      "Fica com raiva e irritado quando os outros não o seguem com a mesma intensidade.",
      "Impaciente com os sentimentos e estilos diferentes dos outros.",
      "Sente-se magoado e rejeitado no fundo, embora raramente admita."
    ],
    impact:
      "O Controlador consegue resultados temporários, mas com o custo de os outros se sentirem controlados, ressentidos e incapazes de alcançar suas maiores capacidades. O Controlador também gera uma grande quantidade de ansiedade, pois muitas coisas no trabalho e na vida não são controláveis.",
    survivalFunction:
      "Por baixo da bravata do Controlador costuma haver um medo escondido de ser controlado por outros ou pela vida. O Controlador costuma ser associado a experiências no começo da vida em que a criança é obrigada a crescer rápido, ficar sozinha e assumir controle do ambiente caótico ou perigoso para poder sobreviver física e/ou emocionalmente. Também é associado a ser magoado, rejeitado ou traído e decidir jamais voltar a ser tão vulnerável.",
    antidote:
      "Diferencie o que está no seu Círculo de Controle (suas escolhas e reações) do que é incerteza natural. Pratique liderar inspirando e capacitando em vez de forçar sua vontade.",
    keySigns: [
      "Ansiedade visceral quando outras pessoas assumem a dianteira",
      "Dificuldade de delegar sem microgerenciar cada etapa",
      "Impaciência agressiva quando os outros têm ritmos diferentes",
      "Comunicação direta que intimida e fecha canais de diálogo"
    ],
    growthTip: "A verdadeira força não reside em controlar as pessoas, mas em dominar a si mesmo e confiar no potencial coletivo.",
    questions: [
      "Você sente forte ansiedade quando outra pessoa está no comando de decisões que afetam você?",
      "Você tem dificuldade em delegar tarefas por acreditar que ninguém fará com a mesma qualidade que você?",
      "Você sente a necessidade constante de fiscalizar ou intervir nas atitudes e entregas das pessoas ao redor?",
      "Você fica impaciente ou irritado quando os acontecimentos fogem do seu roteiro ou planejamento original?",
      "Você prefere centralizar todas as demandas em si mesmo a correr o risco de os outros cometerem falhas?"
    ]
  },
  {
    key: "hyper-achiever",
    name: "O Hiper-Realizador",
    englishName: "Hyper-Achiever",
    lie: "O objetivo da vida é alcançar realizações e produzir resultados. Sentimentos são apenas distração.",
    lies: [
      "O objetivo da vida é alcançar realizações e produzir resultados.",
      "Mostrar uma boa imagem me ajuda a alcançar resultados.",
      "Sentimentos são apenas uma distração e não ajudam em nada."
    ],
    shortDescription: "Dependente de desempenho e realizações constantes para respeito próprio e autovalidação.",
    description:
      "Dependente de desempenho e realizações constantes para respeito próprio e autovalidação. Altamente concentrado em sucesso externo, o que leva a tendências workaholic insustentáveis e perda de contato com necessidades emocionais e de relacionamento mais profundas.",
    characteristics: [
      "Competitivo, atento a imagem e status.",
      "Bom em disfarçar inseguranças e mostrar uma imagem positiva.",
      "Adapta a personalidade para se encaixar ao que seria mais impressionante para os outros.",
      "Orientado para os objetivos e com traços de vício em trabalho.",
      "Mais dedicado a aperfeiçoar a imagem pública do que à introspecção.",
      "Pode se autopromover. Mantém as pessoas a uma distância segura."
    ],
    thoughts: [
      "Preciso ser o melhor no que faço.",
      "Se não posso ser excelente, nem vou me dar ao trabalho. Devo ser eficiente e eficaz.",
      "As emoções atrapalham o desempenho. O foco tem que ser no pensamento e na ação.",
      "Posso ser qualquer coisa que queira.",
      "Sou valioso enquanto for bem-sucedido e os outros pensarem bem de mim."
    ],
    feelings: [
      "Não gosto de insistir em sentimentos por muito tempo. Eles me distraem na realização de objetivos.",
      "Às vezes me sinto vazio e deprimido, mas não passo muito tempo pensando nisso.",
      "Preciso me sentir bem-sucedido. É isso que importa.",
      "Sinto-me valioso por meio de minhas realizações.",
      "Medo de intimidade e vulnerabilidade: a proximidade com outros pode permitir que vejam que não sou tão perfeito quanto a imagem que divulgo."
    ],
    impact:
      "A paz e a felicidade são fugazes e efêmeras em breves celebrações de conquistas. A autoaceitação é continuamente condicionada ao próximo sucesso. Perde contato com sentimentos mais profundos, o eu mais profundo e a capacidade de se conectar intimamente com outros. Os outros podem ser atraídos para o turbilhão de desempenho do Hiper-Realizador e se tornarem similarmente desequilibrados em seu foco na realização externa.",
    survivalFunction:
      "Para o Hiper-Realizador, a autovalidação, a autoaceitação e o amor próprio são condicionais — estão condicionados ao desempenho contínuo. Isso costuma ser resultado de validação condicional ou completamente ausente de figuras paternas. Mesmo com pais amorosos e que demonstram aprovação, é fácil as crianças terem a sensação de que são amadas em troca de conquistas, de obediência a regras, de ter boas maneiras etc em vez de incondicionalmente.",
    antidote:
      "Reconheça seu valor intrínseco como ser humano, independente de troféus ou aplausos. Estabeleça pausas para saborear o presente e defina saúde, presença e relações como metas de sucesso autêntico.",
    keySigns: [
      "Inquietação ou vazio ao não estar trabalhando ou produzindo",
      "Celebrar uma grande conquista por apenas 5 minutos e já focar na próxima",
      "Medo de parecer vulnerável ou despreparado perante os outros",
      "Priorizar o currículo e o status em detrimento da intimidade afetiva"
    ],
    growthTip: "Você já é completo. Sucesso verdadeiro é a alegria serena de viver alinhado ao seu propósito, não uma corrida eterna para provar seu valor.",
    questions: [
      "Você tende a medir o seu valor pessoal pelas suas conquistas, cargos e reconhecimento que recebe?",
      "Você acredita que só merece descanso ou autoaceitação se estiver trabalhando no limite máximo de produção?",
      "Você se sente desconfortavelmente inquieto ou com sensação de vazio quando não está avançando rumo a uma meta?",
      "Você tem dificuldade em se sentir plenamente satisfeito com seus feitos, mesmo quando outros o elogiam?",
      "Você percebe que sua maior motivação de vida sempre foi a busca incessante por conquistas e validação externa?"
    ]
  },
  {
    key: "victim",
    name: "A Vítima",
    englishName: "Victim",
    lie: "Talvez assim eu receba um pouco do amor e atenção que mereço. A tristeza é sofisticada e nobre.",
    lies: [
      "Talvez assim eu receba um pouco do amor e atenção que mereço.",
      "A tristeza é uma coisa nobre e sofisticada que mostra profundidade excepcional, além de discernimento e sensibilidade."
    ],
    shortDescription: "Emocional e temperamental para conquistar atenção e afeição. Foco extremo em sentimentos dolorosos.",
    description:
      "Emocional e temperamental para conquistar atenção e afeição. Foco extremo em sentimentos internos, principalmente os dolorosos. Tendência para mártir.",
    characteristics: [
      "Se criticado ou mal-compreendido, tende a se recolher, fazer beicinho e emburrar.",
      "Bastante dramático e temperamental.",
      "Quando as coisas ficam difíceis, quer desmoronar e desistir.",
      "Sufoca a raiva, o que resulta em depressão, apatia e fadiga constantes.",
      "Inconscientemente ligado a ter dificuldades.",
      "Recebe atenção tendo problemas emocionais ou sendo temperamental e mal-humorado."
    ],
    thoughts: [
      "Ninguém me entende. Pobre de mim. Coisas terríveis sempre me acontecem.",
      "Eu talvez tenha desvantagens ou defeitos únicos.",
      "Sou o que sinto.",
      "Queria que alguém me salvasse dessa terrível confusão."
    ],
    feelings: [
      "Tende a remoer sentimentos negativos por muito tempo.",
      "Se sente sozinho e solitário, mesmo quando perto de pessoas íntimas.",
      "Sentimentos de melancolia e abandono.",
      "Inveja e comparações negativas com a vida supostamente mais fácil dos outros."
    ],
    impact:
      "A vitalidade é desperdiçada no foco em processos internos e ressentimentos. Alcança o efeito oposto ao afastar as pessoas. Os outros se sentem frustrados, impotentes ou culpados por não poderem colocar mais do que um band-aid temporário no ferimento da Vítima.",
    survivalFunction:
      "A Vítima é às vezes associada a uma experiência de infância de não se sentir vista ou aceita, o que a leva a acreditar que tem alguma coisa de errado com ela. A Vítima é uma estratégia para extrair um pouco de afeição das pessoas que de outro modo não estariam prestando atenção. O estado de espírito imita um falso sentimento de estar vivo.",
    antidote:
      "Assuma a autoria da sua vida. Mude a postura de desamparo para ação consciente: pergunte-se 'Qual é a escolha positiva que posso assumir hoje?' e celebre sua capacidade de superação.",
    keySigns: [
      "Remoer mágoas e injustiças passadas como tópico principal de conversa",
      "Recolher-se em silêncio amuado na esperança de que venham resgatá-lo",
      "Sensação de que o mundo conspira contra seus planos",
      "Resistência a conselhos práticos por apego à identidade de sofrimento"
    ],
    growthTip: "Você não precisa sofrer para ser amado ou ouvido. Sua força e alegria atraem conexões muito mais profundas do que a queixa.",
    questions: [
      "Você sente com frequência que a vida, as pessoas ou as circunstâncias são injustas com você de modo persistente?",
      "Você se pega conversando com frequência muito maior sobre suas dores e mágoas do que sobre soluções e metas?",
      "Você já sentiu que focar no seu sofrimento ou desabafar é a melhor forma de conseguir a atenção e o carinho dos outros?",
      "Você costuma se sentir impotente para mudar sua realidade, como se forças externas determinassem o seu destino?",
      "Quando algo desagradável acontece, você tende a se recolher no ressentimento em vez de agir com serenidade para resolver?"
    ]
  },
  {
    key: "hyper-rational",
    name: "O Hiper-Racional",
    englishName: "Hyper-Rational",
    lie: "A mente racional é a coisa mais importante. Emoções e sentimentos atrapalham e são irrelevantes.",
    lies: [
      "A mente racional é a coisa mais importante.",
      "Ela deve ser protegida da invasão desagradável das emoções e necessidades confusas das pessoas para que consiga concluir o trabalho.",
      "Sentimentos atrapalham e são irrelevantes."
    ],
    shortDescription: "Foco intenso e exclusivo no processamento racional de tudo, incluindo relacionamentos.",
    description:
      "Foco intenso e exclusivo no processamento racional de tudo, incluindo relacionamentos. Pode ser percebido como frio, distante e intelectualmente arrogante.",
    characteristics: [
      "Possui uma mente intensa e ativa, às vezes passa por intelectualmente arrogante ou dissimulado.",
      "É reservado e não deixa muitas pessoas conhecerem seus sentimentos mais profundos. Em geral, mostra os sentimentos por meio de paixão pelas ideias.",
      "Prefere apenas observar a loucura que o cerca e analisar de longe.",
      "Pode perder a noção do tempo graças à intensa concentração.",
      "Tendência forte para ceticismo e debate."
    ],
    thoughts: [
      "A mente racional é onde tudo está. Os sentimentos atrapalham e são irrelevantes.",
      "Muitas pessoas são tão irracionais e medíocres no que pensam.",
      "As necessidades e emoções dos outros atrapalham meus projetos. Preciso eliminar invasões.",
      "O que mais valorizo é sabedoria, entendimento e discernimento.",
      "Meu valor próprio está ligado a dominar sabedoria e competência."
    ],
    feelings: [
      "Frustrado pelos outros serem emocionais e irracionais.",
      "Ansioso para preservar tempo pessoal, energia e recursos contra invasões.",
      "Se sente diferente, sozinho e incompreendido.",
      "Costuma ser cético e cínico."
    ],
    impact:
      "Limita a profundidade e a flexibilidade dos relacionamentos no trabalho e na vida por meio de análise em vez de vivenciar sentimentos. Intimida as pessoas com mente menos analítica.",
    survivalFunction:
      "O Hiper-racional é uma boa estratégia de sobrevivência em circunstâncias de desordem e ambiente caótico na infância. A fuga para a mente racional limpa e organizada gera uma sensação de segurança ou uma sensação de superioridade intelectual. Também ganhamos atenção e elogios ao nos mostrarmos a pessoa mais inteligente presente.",
    antidote:
      "Acolha que emoções, empatia e vulnerabilidade são partes vitais da inteligência humana. Pratique escutar sem tentar dissecar ou 'consertar' o sentimento alheio com argumentos lógicos.",
    keySigns: [
      "Desconforto ou irritação com demonstrações de afeto ou desabafos emocionais",
      "Tratar dilemas humanos como equações matemáticas que exigem correção",
      "Ser visto por familiares ou equipes como frio, inacessível ou arrogante",
      "Dificuldade em acessar e nomear o que você mesmo está sentindo"
    ],
    growthTip: "A mente brilhante analisa o mundo; o coração generoso conecta você à vida. Integre razão e sensibilidade para liderar de verdade.",
    questions: [
      "Você toma a grande maioria de suas decisões estritamente com base em dados e lógica, descartando emoções?",
      "Você acha incompreensível ou irritante quando pessoas próximas ficam emotivas em momentos de tensão?",
      "Você costuma desqualificar os sentimentos de outras pessoas como sendo dramáticos, irracionais ou sem sentido?",
      "Você se sente desconfortável ou impaciente quando alguém precisa de apoio afetivo em vez de soluções práticas?",
      "Você tem dificuldade em levar em conta as emoções e os laços interpessoais ao tomar decisões importantes?"
    ]
  },
  {
    key: "hyper-vigilant",
    name: "O Hipervigilante",
    englishName: "Hyper-Vigilant",
    lie: "A vida é cheia de perigos iminentes. Se eu não ficar alerta em tempo integral, quem vai ficar?",
    lies: [
      "A vida é cheia de perigos.",
      "Se eu não ficar alerta, quem vai ficar?",
      "Dangers are always bigger than they appear, and only vigilance guarantees safety."
    ],
    shortDescription: "Ansiedade contínua e intensa quanto a todos os perigos da vida e grande foco no que pode dar errado.",
    description:
      "Ansiedade contínua e intensa quanto a todos os perigos da vida e grande foco no que pode dar errado. Vigilância que nunca pode descansar.",
    characteristics: [
      "Sempre ansioso, com dúvidas crônicas sobre si mesmo e os outros.",
      "Sensibilidade extraordinária a sinais de perigo.",
      "Expectativa constante de contratempos e perigo.",
      "Desconfia do que os outros estão fazendo. A expectativa é de que as pessoas vão estragar tudo.",
      "Pode procurar tranquilidade e orientação em procedimentos, regras, autoridades e instituições."
    ],
    thoughts: [
      "Quando a próxima coisa ruim vai acontecer?",
      "Se eu cometo um erro, tenho medo de todo mundo pular no meu pescoço.",
      "Quero confiar nas pessoas, mas fico desconfiado dos motivos delas.",
      "Preciso saber quais são as regras, embora nem sempre as siga."
    ],
    feelings: [
      "Cético, até mesmo cínico.",
      "Costuma ser ansioso e altamente vigilante.",
      "Fadiga e tensão crônicas no corpo."
    ],
    impact:
      "É uma maneira difícil de viver. A ansiedade constante queima uma grande quantidade de energia vital que poderia ser usada de maneiras excelentes. Perde credibilidade por ver perigo até onde não tem. Os outros começam a evitar o Hipervigilante porque a intensidade da energia nervosa os esgota.",
    survivalFunction:
      "O Hipervigilante costuma vir de experiências no começo da vida em que a fonte de segurança (a figura paterna ou materna) era imprevisível e não era confiável. Também pode surgir quando eventos dolorosos e inesperados fizeram a vida parecer ameaçadora e insegura.",
    antidote:
      "Ancore-se no presente com exercícios de respiração e aterramento sensorial. Pergunte-se com clareza: 'Há perigo real acontecendo agora, neste exato segundo?'. Confie na sua capacidade de lidar com imprevistos quando eles de fato existirem.",
    keySigns: [
      "Estado permanente de sobressalto e tensão muscular nos ombros e mandíbula",
      "Criar mentalmente cenários catastróficos para viagens, reuniões ou projetos",
      "Desconfiança crônica quanto à intenção de parceiros ou colegas",
      "Exaustão mental ao final do dia sem causa física aparente"
    ],
    growthTip: "Preocupação contínua não previne tragédias; ela apenas anula a paz, a alegria e a lucidez do seu momento presente.",
    questions: [
      "Você se pega frequentemente preocupado com possíveis desastres ou problemas graves, mesmo com tudo calmo?",
      "Você tem grande dificuldade em relaxar de verdade porque sua mente fica antecipando o que pode dar errado?",
      "Você gasta muita energia mental monitorando riscos e antecipando ameaças por pura apreensão interna?",
      "Você se vê rotineiramente formulando planos de contingência mental para os piores cenários imagináveis?",
      "Você sente ansiedade contínua e desconfiança, como se baixar a guarda fosse um risco perigoso?"
    ]
  },
  {
    key: "restless",
    name: "O Inquieto",
    englishName: "Restless",
    lie: "A vida é curta demais e precisa ser vivida intensamente. Não posso perder nada.",
    lies: [
      "A vida é curta demais. Precisa ser vivida intensamente.",
      "Não quero perder nada (FOMO).",
      "A próxima coisa será muito mais empolgante do que a atual."
    ],
    shortDescription: "Em constante busca de maior excitação na próxima atividade ou se ocupando constantemente.",
    description:
      "Inquieto; em constante busca de maior excitação na próxima atividade ou se ocupando constantemente. Raramente fica em paz ou satisfeito com a atividade do momento.",
    characteristics: [
      "Distrai-se facilmente e pode ficar muito disperso.",
      "Permanece sempre ocupado, executando muitas tarefas e planos diferentes.",
      "Procura excitação e variedade, não conforto e segurança.",
      "Salta (foge) de sentimentos desagradáveis muito rapidamente.",
      "Procura novos estímulos constantes."
    ],
    thoughts: [
      "Isso não é satisfatório. A próxima coisa que vou fazer tem que ser mais interessante.",
      "Esses sentimentos negativos são horríveis. Preciso mudar minha atenção para alguma coisa envolvente.",
      "Por que ninguém consegue me acompanhar?"
    ],
    feelings: [
      "Impaciente com o que está acontecendo no presente. Quer saber o que vem depois.",
      "Tem medo de perder experiências que valham mais a pena.",
      "Se sente inquieto e quer mais e mais opções.",
      "Tem medo de o foco em um sentimento desagradável crescer e se tornar esmagador."
    ],
    impact:
      "Por baixo da superfície de diversão e animação do Inquieto há uma fuga baseada na ansiedade de estar presente e vivenciando cada momento intensamente, o que pode incluir lidar com coisas desagradáveis. O Inquieto evita um foco real e duradouro nos assuntos e relacionamentos que realmente importam. Os outros têm dificuldade em acompanhar o frenesi e o caos criados pelo Inquieto e são incapazes de construir qualquer coisa sustentável nesse ambiente.",
    survivalFunction:
      "O Inquieto é uma estratégia para encontrar novas fontes de excitação, prazer e autopromoção constantemente. Isso pode ser associado a experiências do começo da vida com atenção inadequada dos pais ou circunstâncias dolorosas. A complacência do Inquieto não só forneceu atenção substituta como também uma fuga para não ter que lidar com a ansiedade e a dor.",
    antidote:
      "Aprenda a encontrar profundidade e encanto na quietude e na consistência. Comprometa-se a terminar um projeto antes de iniciar outro e encare o tédio passageiro como solo fértil para a verdadeira maestria.",
    keySigns: [
      "Dezenas de abas abertas, cursos pela metade e projetos abandonados no meio",
      "Pavor da rotina ou de tarefas que exijam repetição disciplinada",
      "Comprar itens ou mudar de planos impulsivamente para sentir empolgação rápida",
      "Dificuldade de estar presente em conversas sem olhar o celular ou pensar adiante"
    ],
    growthTip: "A vida extraordinária não está na quantidade frenética de experiências rasas, mas na profundidade com que você habita o que escolheu.",
    questions: [
      "Você se sente rapidamente seduzido por novas ideias ou projetos antes mesmo de concluir os que já começou?",
      "Você recorre a novidades, compras ou mudanças constantes como forma rápida de escapar do tédio ou da rotina?",
      "Você tem grande dificuldade em manter foco e persistência quando o entusiasmo inicial de um plano diminui?",
      "Você sente inquietação quando as coisas estão calmas e previsíveis, buscando logo uma nova agitação?",
      "Você tende a saltar de interesse em interesse sem se aprofundar o suficiente para colher frutos consistentes?"
    ]
  },
  {
    key: "pleaser",
    name: "O Prestativo",
    englishName: "Pleaser",
    lie: "Não faço isso por mim; ajudo os outros altruisticamente. O mundo seria melhor se todos fizessem o mesmo.",
    lies: [
      "Não faço isso por mim. Ajudo os outros altruisticamente e não espero nada em troca.",
      "O mundo seria um lugar melhor se todo mundo fizesse o mesmo.",
      "Para ser uma boa pessoa, devo colocar as necessidades dos outros à frente das minhas."
    ],
    shortDescription: "Tentativa indireta de conseguir aceitação e afeição por meio de ajuda, agrado, resgate ou elogio a outros.",
    description:
      "Tentativa indireta de conseguir aceitação e afeição por meio de ajuda, agrado, resgate ou elogio a outros. Perde as próprias necessidades de vista e se torna ressentido como resultado.",
    characteristics: [
      "Tem uma forte necessidade de ser amado e tenta conseguir isso ajudando, agradando, resgatando ou elogiando outras pessoas.",
      "Precisa se certificar com frequência da aceitação e afeição dos outros.",
      "Não consegue expressar as próprias necessidades aberta e diretamente. Faz isso de maneira indireta, deixando as pessoas se sentirem obrigadas a retribuir."
    ],
    thoughts: [
      "Para ser uma boa pessoa, devo colocar as necessidades dos outros à frente das minhas. Fico incomodado quando as pessoas não reparam ou não ligam para o que fiz por elas. São muito egoístas e ingratas.",
      "Dou muito e não penso o bastante em mim.",
      "Posso fazer qualquer pessoa gostar de mim.",
      "Se eu não salvar as pessoas, quem vai salvar?"
    ],
    feelings: [
      "Expressar as próprias necessidades diretamente parece egoísmo.",
      "Tem medo de que insistir nas próprias necessidades vá afastar os outros.",
      "Se ressente de não ser valorizado, mas tem dificuldade em expressar isso."
    ],
    impact:
      "Pode colocar em risco as próprias necessidades, sejam emocionais, físicas ou financeiras. Pode levar a ressentimento e desgaste. Outros podem desenvolver dependência em vez de aprenderem a cuidar de si mesmos e podem se sentir obrigados, culpados ou manipulados.",
    survivalFunction:
      "O Prestativo tenta ganhar a atenção e aceitação ao ajudar os outros. É uma tentativa indireta de satisfazer as necessidades emocionais dessa pessoa. É alimentado por duas suposições originais que são aprendidas na infância: 1. Devo colocar as necessidades dos outros à frente das minhas. 2. Devo dar amor e afeição para poder receber em troca. Preciso conquistar esses sentimentos e não sou digno disso.",
    antidote:
      "Aprenda a dizer 'não' com firmeza e afeto, sem dar justificativas excessivas. Priorize seu autocuidado: você só consegue servir com autenticidade a partir de uma taça que já transborda.",
    keySigns: [
      "Dizer 'sim' a pedidos quando o corpo e a mente imploram por descanso",
      "Sentir ressentimento velado quando ninguém repara na sua dedicação",
      "Culpa imediata ao dizer 'não' ou ao expressar o que você quer",
      "Criar dependência nos outros em vez de ensiná-los a caminhar sozinhos"
    ],
    growthTip: "Amor verdadeiro não é uma negociação de favores. Quem ama você de verdade respeita seus limites e deseja vê-lo inteiro.",
    questions: [
      "Você costuma dizer 'sim' aos pedidos dos outros mesmo quando internamente deseja recusar ou está exausto?",
      "Você acha constrangedor ou difícil expressar suas próprias vontades por receio de incomodar ou decepcionar?",
      "Você coloca as necessidades e prioridades alheias sistematicamente acima dos seus próprios cuidados essenciais?",
      "Você percebe que usa a prestatividade constante como a principal ferramenta para se sentir amado e aceito?",
      "Você sente ressentimento silencioso ou cansaço após se doar tanto, mas acaba repetindo o padrão na próxima vez?"
    ]
  },
  {
    key: "stickler",
    name: "O Insistente",
    englishName: "Stickler / Perfeccionista",
    lie: "O perfeccionismo é bom e me faz sentir bem. Costuma haver um jeito certo óbvio e um jeito errado óbvio.",
    lies: [
      "É uma obrigação pessoal. Depende de mim consertar as confusões que eu encontrar.",
      "O perfeccionismo é bom e me faz sentir bem comigo mesmo.",
      "Costuma haver um jeito certo óbvio e um jeito errado óbvio de fazer as coisas.",
      "Sei como as coisas devem ser feitas e preciso fazer a coisa certa."
    ],
    shortDescription: "Perfeccionismo e necessidade de ordem e organização levadas longe demais.",
    description:
      "Perfeccionismo e necessidade de ordem e organização levadas longe demais. Causa rigidez e reduz a flexibilidade ao lidar com a mudança.",
    characteristics: [
      "Pontual, metódico, perfeccionista.",
      "Pode ser irritável, tenso, teimoso, sarcástico.",
      "Altamente crítico de si mesmo e dos outros.",
      "Forte necessidade de autocontrole e autocontenção.",
      "Trabalha além do necessário para compensar a negligência e a preguiça dos outros.",
      "É altamente sensível a críticas."
    ],
    thoughts: [
      "O certo é certo e o errado é errado. Eu sei o jeito certo.",
      "Se não consegue fazer com perfeição, não faça.",
      "Os outros costumam ter padrões vagos.",
      "Preciso ser mais organizado e metódico do que os outros para que as coisas sejam feitas.",
      "Odeio erros."
    ],
    feelings: [
      "Frustração constante e decepção consigo mesmo e com os outros por não alcançar os altos padrões.",
      "Angustiado por medo de os outros estragarem a ordem e o equilíbrio que ele criou.",
      "Tons sarcásticos ou hipócritas.",
      "Raiva e frustração contidas."
    ],
    impact:
      "Causa rigidez e reduz a flexibilidade ao lidar com a mudança e os estilos diferentes dos outros. É fonte de constante ansiedade e frustração. Causa ressentimento, ansiedade, dúvida de si mesmo e resignação nos outros, que se sentem continuamente criticados e se resignam ao fato de que, independente do quanto trabalhem, jamais vão agradar o Insistente.",
    survivalFunction:
      "O Insistente oferece uma maneira de silenciar a voz constante da autocrítica e do medo da crítica dos outros ao tentar ser perfeito. Se você fizer o que é certo, vai estar fora do alcance da interferência e da reprovação dos outros. A perfeição e a ordem trazem um sentimento de alívio temporário. Pode ter gerado uma sensação de ordem em meio a uma dinâmica familiar caótica, ou ganhado aceitação e atenção de pais emocionalmente distantes ou exigentes ao se destacar como a criança perfeita irrepreensível.",
    antidote:
      "Adote o lema: 'O bom e feito é muito superior ao perfeito que nunca sai'. Pratique tolerar pequenas imperfeições deliberadas e celebre o aprendizado prático em vez da rigidez esterilizadora.",
    keySigns: [
      "Refazer o trabalho dos outros em segredo por achar que não ficou à altura",
      "Atrasar projetos e decisões refinando detalhes que ninguém repara",
      "Irritação visível e comentários sarcásticos quando há pequenos desvios de método",
      "Incapacidade de relaxar enquanto houver algo fora do lugar"
    ],
    growthTip: "Excelência é dedicação inspirada com margem para a humanidade; perfeccionismo é o medo do julgamento disfarçado de organização.",
    questions: [
      "Você sente grande ansiedade ou irritação quando algo não sai exatamente com a perfeição que você idealizou?",
      "Você gasta tanto tempo refinando detalhes e regras que acaba atrasando atitudes práticas e entregas reais?",
      "Você se irrita facilmente com pessoas que não executam tarefas com o mesmo rigor cirúrgico que o seu?",
      "Você evita dar um passo importante até sentir que dominou todas as variáveis e eliminou qualquer margem de erro?",
      "Você tem dificuldade em relaxar ou comemorar se notar um único defeito ou imperfeição no resultado final?"
    ]
  }
];

export const RATING_SCALE = [
  { val: 1, label: "Nunca", hint: "Quase nunca penso ou ajo assim" },
  { val: 2, label: "Raramente", hint: "Ocorre em raras exceções" },
  { val: 3, label: "Às vezes", hint: "Ocorre com frequência moderada" },
  { val: 4, label: "Frequentemente", hint: "Padrão comum no meu dia a dia" },
  { val: 5, label: "Sempre", hint: "Descreve perfeitamente como funciono" }
];

export interface QuizQuestionItem {
  id: number;
  saboteurIndex: number;
  saboteurKey: string;
  saboteurName: string;
  questionIndex: number;
  text: string;
}

export const ALL_QUESTIONS: QuizQuestionItem[] = [];
SABOTEURS.forEach((s, si) => {
  s.questions.forEach((q, qi) => {
    ALL_QUESTIONS.push({
      id: si * 5 + qi + 1,
      saboteurIndex: si,
      saboteurKey: s.key,
      saboteurName: s.name,
      questionIndex: qi,
      text: q
    });
  });
});
