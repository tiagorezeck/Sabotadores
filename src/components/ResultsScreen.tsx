import React, { useEffect, useState, useMemo } from 'react';
import { SABOTEURS, Saboteur } from '../data/saboteurs';
import { getSaboteurLevelInsights, TIERS } from '../data/saboteurLevels';
import confetti from 'canvas-confetti';
import {
  ShieldAlert,
  Sparkles,
  RotateCcw,
  Printer,
  Copy,
  Check,
  Share2,
  Info,
  ChevronDown,
  Award,
  BookOpen,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface ResultsScreenProps {
  answers: (number | null)[];
  onRetake: () => void;
  onOpenGuide: (saboteurKey?: string) => void;
  isSample?: boolean;
}

interface SaboteurScore {
  saboteur: Saboteur;
  score: number;
  percentage: number;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  answers,
  onRetake,
  onOpenGuide,
  isSample = false
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({});
  const [showTierLegend, setShowTierLegend] = useState<boolean>(false);

  // Calculate scores for all 9 saboteurs
  const scores: SaboteurScore[] = useMemo(() => {
    return SABOTEURS.map((s, si) => {
      let total = 0;
      for (let qi = 0; qi < 5; qi++) {
        const globalIdx = si * 5 + qi;
        total += answers[globalIdx] || 1;
      }
      return {
        saboteur: s,
        score: total,
        percentage: Math.round((total / 25) * 100)
      };
    }).sort((a, b) => b.score - a.score);
  }, [answers]);

  const top1 = scores[0];
  const top2 = scores[1];
  const gap = top1.score - top2.score;

  // Toggle individual card
  const toggleCard = (key: string) => {
    setExpandedKeys(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Toggle all cards
  const allExpanded = scores.every(s => expandedKeys[s.saboteur.key]);
  const toggleAll = () => {
    if (allExpanded) {
      setExpandedKeys({});
    } else {
      const all: Record<string, boolean> = {};
      scores.forEach(s => {
        all[s.saboteur.key] = true;
      });
      setExpandedKeys(all);
    }
  };

  // Trigger celebration confetti on mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#162a36', '#1b4332', '#c59b27', '#e8f2f7']
      });
    } catch {
      // Ignore if canvas-confetti fails
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Copy results summary to clipboard
  const handleCopySummary = () => {
    const text = `🎯 Meu Resultado no Quiz dos Sabotadores da Mente:
• 1º Sabotador Principal: ${top1.saboteur.name} (${top1.score}/25 pontos - ${top1.percentage}%)
  Mentira: "${top1.saboteur.lie}"
• 2º Sabotador Coadjuvante: ${top2.saboteur.name} (${top2.score}/25 pontos - ${top2.percentage}%)
  Mentira: "${top2.saboteur.lie}"

Ranking dos 9 Sabotadores por Intensidade:
${scores.map((s, i) => {
  const insights = getSaboteurLevelInsights(s.saboteur, s.percentage);
  return `${i + 1}. ${s.saboteur.name}: ${s.score}/25 (${s.percentage}%) [Nível: ${insights.tier.label}]`;
}).join('\n')}

Descubra seus sabotadores mentais e assuma a autoliderança da sua vida!`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Meus Sabotadores da Mente',
          text: `Meu sabotador principal é ${top1.saboteur.name} (${top1.score}/25). Faça o teste você também!`,
          url: window.location.href
        });
      } catch {
        handleCopySummary();
      }
    } else {
      handleCopySummary();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14 space-y-10 print-page">
      {/* Demo Profile Notification Banner */}
      {isSample && (
        <div className="bg-amber-50/95 border border-amber-300 rounded-2xl p-4 text-xs sm:text-sm text-amber-950 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs no-print">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Relatório Fictício de Demonstração:</strong> Você está visualizando um perfil pré-preenchido para explorar a análise, os antídotos e as faixas de intensidade.
            </span>
          </div>
          <button
            onClick={onRetake}
            className="px-4 py-2 bg-[#1b4332] text-white hover:bg-[#143225] rounded-xl font-semibold text-xs whitespace-nowrap cursor-pointer transition-all shadow-xs shrink-0"
          >
            Fazer Meu Teste Real (45 Questões)
          </button>
        </div>
      )}

      {/* Header & Celebration */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
          <Award className="w-3.5 h-3.5 text-amber-700" />
          <span>Diagnóstico Concluído</span>
          <span aria-hidden="true">·</span>
          <span>Perfil Mapeado</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
          Seus Sabotadores da Mente
        </h1>

        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Com base nas suas 45 respostas, identificamos que o{' '}
          <strong className="font-semibold text-stone-900">{top1.saboteur.name}</strong> e o{' '}
          <strong className="font-semibold text-stone-900">{top2.saboteur.name}</strong> são os padrões que mais influenciam suas atitudes, reações e decisões.
        </p>
      </div>

      {/* Gap Analysis Card */}
      <div className="bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl p-5 sm:p-6 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
          <Info className="w-4 h-4 text-amber-600" />
          <span>Análise de Dinâmica entre seus Dois Sabotadores</span>
        </div>
        <p className="text-sm sm:text-base text-amber-950 leading-relaxed">
          {gap >= 5 ? (
            <>
              O <strong className="font-bold">{top1.saboteur.name}</strong> é claramente o seu{' '}
              <span className="underline decoration-amber-400 font-semibold">sabotador dominante</span>{' '}
              (diferença de {gap} pontos), comandando com forte intensidade suas reações automáticas e pontos de estresse. 
              Já o <strong className="font-bold">{top2.saboteur.name}</strong> atua como coadjuvante, amplificando o padrão em momentos de pressão.
            </>
          ) : gap >= 2 ? (
            <>
              O <strong className="font-bold">{top1.saboteur.name}</strong> lidera o ranking, mas o{' '}
              <strong className="font-bold">{top2.saboteur.name}</strong> está logo atrás (apenas {gap} pontos de diferença).{' '}
              Ambos os sabotadores exercem influência muito próxima no seu cotidiano e merecem vigilância atenta.
            </>
          ) : (
            <>
              O <strong className="font-bold">{top1.saboteur.name}</strong> e o{' '}
              <strong className="font-bold">{top2.saboteur.name}</strong> estão praticamente empatados{' '}
              (diferença de apenas {gap} ponto{gap === 1 ? '' : 's'}). 
              Eles operam como uma <em>dupla silenciosa de sabotagem</em>: quando um recua, o outro assume a liderança dos seus pensamentos e reações.
            </>
          )}
        </p>
      </div>

      {/* Primary Saboteur Card */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_30px_rgba(22,42,54,0.06)] overflow-hidden">
        {/* Top Header of Card */}
        <div className="bg-[#162a36] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
              <span>Sabotador Principal · Maior Intensidade</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white">
              {top1.saboteur.name}
            </h2>
            <div className="text-xs text-stone-300 font-medium">
              Arquétipo Original: {top1.saboteur.englishName}
            </div>
          </div>

          <div className="sm:text-right shrink-0">
            <div className="text-xs text-stone-300 uppercase tracking-wider font-semibold">
              Pontuação
            </div>
            <div className="font-serif text-3xl sm:text-5xl font-bold text-amber-300 tabular-nums">
              {top1.score}
              <span className="text-base sm:text-lg font-normal text-stone-300 opacity-80">
                {' '}
                / 25
              </span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* The Lie Box */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>A Mentira Narrada por este Sabotador</span>
            </div>
            <p className="font-serif text-lg sm:text-xl italic text-amber-950 font-medium leading-snug">
              "{top1.saboteur.lie}"
            </p>
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-stone-600 uppercase tracking-wider">
              Como ele sabota sua vida, trabalho e relações
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {top1.saboteur.description}
            </p>
          </div>

          {/* Key Signs */}
          <div className="bg-stone-50 border border-stone-200/70 rounded-2xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-stone-600 uppercase tracking-wider">
              Sinais Clássicos de Ativação
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {top1.saboteur.keySigns.map((sign, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Antidote Box */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Antídoto & Como Neutralizar este Padrão</span>
            </div>
            <p className="text-sm sm:text-base text-emerald-950 leading-relaxed font-medium">
              {top1.saboteur.antidote}
            </p>
            <div className="pt-2 border-t border-emerald-200/50 text-xs text-emerald-800 italic">
              💡 {top1.saboteur.growthTip}
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Saboteur Card */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_30px_rgba(22,42,54,0.06)] overflow-hidden">
        {/* Top Header of Card */}
        <div className="bg-[#1b4332] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200 uppercase tracking-wider">
              <span>Sabotador Secundário · Coadjuvante</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white">
              {top2.saboteur.name}
            </h2>
            <div className="text-xs text-emerald-200/80 font-medium">
              Arquétipo Original: {top2.saboteur.englishName}
            </div>
          </div>

          <div className="sm:text-right shrink-0">
            <div className="text-xs text-emerald-200/80 uppercase tracking-wider font-semibold">
              Pontuação
            </div>
            <div className="font-serif text-3xl sm:text-5xl font-bold text-white tabular-nums">
              {top2.score}
              <span className="text-base sm:text-lg font-normal text-emerald-200 opacity-80">
                {' '}
                / 25
              </span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* The Lie Box */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>A Mentira Narrada por este Sabotador</span>
            </div>
            <p className="font-serif text-lg sm:text-xl italic text-amber-950 font-medium leading-snug">
              "{top2.saboteur.lie}"
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-stone-600 uppercase tracking-wider">
              Como ele influencia seus comportamentos
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {top2.saboteur.description}
            </p>
          </div>

          {/* Antidote */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Estratégia de Neutralização</span>
            </div>
            <p className="text-sm sm:text-base text-emerald-950 leading-relaxed">
              {top2.saboteur.antidote}
            </p>
          </div>
        </div>
      </div>

      {/* Comparative Ranking with Accordion Cards & Level Calibration */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xs p-6 sm:p-8 space-y-6 break-inside-avoid">
        {/* Header of Ranking Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-stone-100">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Ranking dos 9 Sabotadores da Mente
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Clique em qualquer card (seta ▼) para ver como cada um sabota você e como minimizar o impacto.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowTierLegend(!showTierLegend)}
              className="text-xs font-medium text-stone-600 hover:text-stone-900 px-2.5 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-50 flex items-center gap-1.5 cursor-pointer"
              title="Explicar faixas de intensidade"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
              <span>Faixas de Intensidade</span>
            </button>

            <button
              onClick={toggleAll}
              className="text-xs font-semibold text-[#162a36] hover:text-amber-800 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200/80 transition-colors cursor-pointer"
            >
              {allExpanded ? 'Recolher todos' : 'Expandir todos'}
            </button>
          </div>
        </div>

        {/* Tier Legend Box */}
        {showTierLegend && (
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Critérios de Intensidade dos Sabotadores
              </span>
              <button
                onClick={() => setShowTierLegend(false)}
                className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
              >
                Fechar
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
              {TIERS.map(tier => (
                <div key={tier.key} className="bg-white border border-stone-200 rounded-xl p-3 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="font-bold text-stone-900 block">{tier.label}</span>
                    <span className="text-[11px] text-amber-800 font-semibold block">{tier.minPct}% a {tier.maxPct}%</span>
                    <p className="text-[11px] text-stone-500 leading-tight">{tier.summary}</p>
                  </div>
                  <div className={`h-1.5 w-full ${tier.barColor} rounded-full mt-2`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* List of Accordion Cards */}
        <div className="space-y-3">
          {scores.map((item, idx) => {
            const isTop1 = idx === 0;
            const isTop2 = idx === 1;
            const isExpanded = !!expandedKeys[item.saboteur.key];
            const insights = getSaboteurLevelInsights(item.saboteur, item.percentage);
            const tier = insights.tier;

            return (
              <div
                key={item.saboteur.key}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-stone-300 bg-stone-50/40 shadow-xs ring-1 ring-stone-200'
                    : isTop1
                    ? 'border-[#162a36]/30 bg-white hover:border-[#162a36]/60'
                    : isTop2
                    ? 'border-[#1b4332]/30 bg-white hover:border-[#1b4332]/60'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => toggleCard(item.saboteur.key)}
                  className="w-full p-4 sm:p-4.5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span className="tabular-nums text-stone-400 font-mono text-xs font-semibold w-6">
                      #{idx + 1}
                    </span>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                          {item.saboteur.name}
                        </span>

                        {isTop1 && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-300">
                            Principal
                          </span>
                        )}

                        {isTop2 && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300">
                            Coadjuvante
                          </span>
                        )}

                        {/* Intensity Tier Badge */}
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${tier.badgeBg} ${tier.badgeTextCol} ${tier.borderColor}`}>
                          {tier.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Score + Chevron Arrow */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <div className="flex items-center gap-2 tabular-nums">
                      <span className="text-xs text-stone-500 font-medium">
                        ({item.percentage}%)
                      </span>
                      <span className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                        {item.score}{' '}
                        <span className="text-xs font-normal text-stone-400">/ 25</span>
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isExpanded
                        ? 'bg-stone-900 text-white rotate-180 shadow-xs'
                        : 'bg-stone-100 text-stone-600 group-hover:bg-stone-200'
                    }`}>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </div>
                  </div>
                </button>

                {/* Progress Bar inside Card Header */}
                <div className="px-4 sm:px-4.5 pb-2">
                  <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${tier.barColor}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-3 border-t border-stone-200/80 space-y-4 bg-white animate-in fade-in duration-200">
                    {/* Counterpoint Context Notice */}
                    <div className="text-xs text-stone-500 flex items-center gap-2 bg-stone-50 px-3 py-2 rounded-lg border border-stone-200/60">
                      <Info className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>
                        {isTop1 || isTop2 ? (
                          <>
                            <strong>Sabotador em destaque principal:</strong> Este padrão está entre os seus dois maiores e foi detalhado no início deste relatório.
                          </>
                        ) : (
                          <>
                            <strong>Contraponto com os líderes:</strong> Este sabotador pontuou abaixo dos seus dois maiores, exercendo impacto proporcionalmente menor.
                          </>
                        )}
                      </span>
                    </div>

                    {/* The Lie */}
                    <div className="text-xs italic text-stone-600 border-l-2 border-amber-500 pl-3 py-0.5">
                      Mentira que ele conta: <span className="font-medium text-stone-800 font-serif">"{item.saboteur.lie}"</span>
                    </div>

                    {/* Grid: O que ele faz vs Como minimizar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {/* What it does */}
                      <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-4 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                          <ShieldAlert className="w-4 h-4 text-amber-600" />
                          <span>O que ele faz no seu dia a dia?</span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {insights.whatItDoes}
                        </p>
                      </div>

                      {/* How to minimize */}
                      <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xl p-4 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                          <span>Como minimizar o impacto?</span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {insights.howToMinimize}
                        </p>
                      </div>
                    </div>

                    {/* Action link to encyclopedia */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-stone-400">
                        {item.saboteur.keySigns.length} sinais clássicos mapeados na enciclopédia
                      </span>
                      <button
                        onClick={() => onOpenGuide(item.saboteur.key)}
                        className="text-xs font-semibold text-[#162a36] hover:text-amber-800 flex items-center gap-1 cursor-pointer hover:underline"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Ver perfil completo na Enciclopédia</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3-Step Action Plan */}
      <div className="bg-[#162a36] text-white rounded-3xl p-6 sm:p-10 space-y-8 break-inside-avoid">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
            Plano de Autoliderança Comportamental
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Como desarmar seus sabotadores no dia a dia
          </h3>
          <p className="text-xs sm:text-sm text-stone-300">
            Neurociência aplicada para transformar reações automáticas em decisões lúcidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-900 font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="font-serif text-lg font-bold text-white">
              Rotule no Momento Exato
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Ao notar ansiedade, vontade de evitar conversas ou perfeccionismo excessivo, diga mentalmente: <em>"Esse não sou eu, é o meu {top1.saboteur.name} querendo assumir o controle."</em>
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-900 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="font-serif text-lg font-bold text-white">
              A Pausa dos 10 Segundos
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Respire fundo por 3 ciclos e sinta seus pés apoiados no chão. Isso desativa o sequestro da amígdala e devolve o comando ao córtex pré-frontal (a mente sábia).
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-900 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="font-serif text-lg font-bold text-white">
              Aplique o Hábito Antídoto
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Substitua o impulso automático pela estratégia indicada para o {top1.saboteur.name}: {top1.saboteur.antidote.slice(0, 110)}...
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4 no-print">
        <button
          onClick={handleCopySummary}
          className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-medium text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copiado para a área de transferência!' : 'Copiar Resumo'}</span>
        </button>

        <button
          onClick={handleShare}
          className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-medium text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Share2 className="w-4 h-4" />
          <span>Compartilhar</span>
        </button>

        <button
          onClick={handlePrint}
          className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-medium text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimir / Salvar em PDF</span>
        </button>

        <button
          onClick={onRetake}
          className="px-6 py-3 bg-[#1b4332] hover:bg-[#143225] text-white rounded-xl font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow active:scale-[0.98]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Refazer a Avaliação</span>
        </button>
      </div>
    </div>
  );
};
