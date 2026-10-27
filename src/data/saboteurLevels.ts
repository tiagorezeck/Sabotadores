import { Saboteur } from './saboteurs';

export type TierKey = 'dormant' | 'low' | 'moderate' | 'high' | 'critical';

export interface SaboteurTier {
  key: TierKey;
  label: string;
  shortLabel: string;
  minPct: number;
  maxPct: number;
  barColor: string;
  badgeBg: string;
  badgeTextCol: string;
  borderColor: string;
  summary: string;
}

export const TIERS: SaboteurTier[] = [
  {
    key: 'dormant',
    label: 'Inofensivo / Dormente',
    shortLabel: 'Dormente',
    minPct: 0,
    maxPct: 49,
    barColor: 'bg-stone-300',
    badgeBg: 'bg-stone-100',
    badgeTextCol: 'text-stone-600',
    borderColor: 'border-stone-200',
    summary: 'Raramente se manifesta; não exerce controle perceptível sobre você.'
  },
  {
    key: 'low',
    label: 'Baixa Influência',
    shortLabel: 'Influência Leve',
    minPct: 50,
    maxPct: 59,
    barColor: 'bg-sky-400',
    badgeBg: 'bg-sky-50',
    badgeTextCol: 'text-sky-800',
    borderColor: 'border-sky-200',
    summary: 'Surge de forma pontual em situações atípicas; fácil de gerenciar.'
  },
  {
    key: 'moderate',
    label: 'Influência Moderada',
    shortLabel: 'Atenção Moderada',
    minPct: 60,
    maxPct: 69,
    barColor: 'bg-amber-500',
    badgeBg: 'bg-amber-50',
    badgeTextCol: 'text-amber-800',
    borderColor: 'border-amber-200',
    summary: 'Padrão intermediário perceptível; gera atritos em dias de maior estresse.'
  },
  {
    key: 'high',
    label: 'Forte Influência',
    shortLabel: 'Ativo / Elevado',
    minPct: 70,
    maxPct: 84,
    barColor: 'bg-orange-500',
    badgeBg: 'bg-orange-50',
    badgeTextCol: 'text-orange-900',
    borderColor: 'border-orange-200',
    summary: 'Atua com frequência relevante; interfere diretamente na produtividade e relações.'
  },
  {
    key: 'critical',
    label: 'Crítico / Dominante',
    shortLabel: 'Sabotador Crítico',
    minPct: 85,
    maxPct: 100,
    barColor: 'bg-[#1b4332]',
    badgeBg: 'bg-emerald-900 text-white',
    badgeTextCol: 'text-white',
    borderColor: 'border-emerald-800',
    summary: 'Comanda o piloto automático cotidiano; requer intervenção e neutralização prioritárias.'
  }
];

export function getTierForPercentage(pct: number): SaboteurTier {
  if (pct >= 85) return TIERS[4]; // critical
  if (pct >= 70) return TIERS[3]; // high
  if (pct >= 60) return TIERS[2]; // moderate
  if (pct >= 50) return TIERS[1]; // low
  return TIERS[0]; // dormant
}

// Tailored insights per saboteur and intensity level
export function getSaboteurLevelInsights(saboteur: Saboteur, pct: number) {
  const tier = getTierForPercentage(pct);

  switch (tier.key) {
    case 'dormant':
      return {
        tier,
        whatItDoes: `Este sabotador está praticamente inativo no seu perfil (abaixo de 50%). Você raramente sofre com os gatilhos clássicos de ${saboteur.name.toLowerCase()} e consegue lidar com essas situações com есте naturalidade e serenidade.`,
        howToMinimize: `Nenhuma intervenção ativa é necessária. Continue mantendo sua autopercepção habitual; este não é um foco de preocupação para sua rotina atual.`
      };

    case 'low':
      return {
        tier,
        whatItDoes: `Manifesta-se de maneira sutil e ocasional (50% a 59%). Quando você está excessivamente cansado ou pressionado, pode apresentar pequenos impulsos temporários ligados a ${saboteur.name.toLowerCase()}, mas logo retoma a postura consciente.`,
        howToMinimize: `Fácil de conter: quando sentir o sutil impulso surgir, faça uma breve pausa de 5 segundos. Nomeie o padrão e escolha conscientemente não alimentar o comportamento automático.`
      };

    case 'moderate':
      return {
        tier,
        whatItDoes: `Padrão intermediário perceptível no seu dia a dia (60% a 69%). Em momentos de cobrança ou ansiedade, ${saboteur.name.toLowerCase()} entra em ação e começa a gerar atrasos, desgastes ou pequenos ruídos nas suas decisões e relações.`,
        howToMinimize: `Ação preventiva e combinados simples: ${saboteur.antidote.slice(0, 140)}... Pratique identificar o momento exato em que ele tenta justificar a sua mentira central: "${saboteur.lie}".`
      };

    case 'high':
      return {
        tier,
        whatItDoes: `Sabotador bastante ativo e influente (70% a 84%). Opera com frequência no seu cotidiano, moldando hábitos automáticos e drenando energia vital. ${saboteur.shortDescription} Isso cobra um preço real no seu bem-estar e nos seus resultados.`,
        howToMinimize: `Plano de contenção consciente prioritário: ${saboteur.antidote} Estabeleça lembretes visuais ou rotinas diárias para barrar esse piloto automático logo no início da manhã.`
      };

    case 'critical':
      return {
        tier,
        whatItDoes: `Nível crítico e dominante (85% ou mais). ${saboteur.name} está no comando quase constante das suas reações sob pressão. Ele faz você acreditar com convicção absoluta na mentira de que "${saboteur.lie}", como se essa fosse a única forma de sobreviver ou ter sucesso.`,
        howToMinimize: `Protocolo intensivo de autoliderança: 1) Rotule em voz alta assim que o impulso surgir ("Esse é o meu ${saboteur.name} querendo me sequestrar"); 2) Faça a pausa dos 10 segundos com respiração diafragmática profunda; 3) Aplique sem negociação o antídoto: ${saboteur.antidote}`
      };
  }
}
