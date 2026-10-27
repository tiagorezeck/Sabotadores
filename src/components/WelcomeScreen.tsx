import React from 'react';
import { ArrowRight, BookOpen, Check, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';
import { RATING_SCALE } from '../data/saboteurs';

interface WelcomeScreenProps {
  onStart: () => void;
  onOpenGuide: () => void;
  onLoadSample: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onOpenGuide, onLoadSample }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14 space-y-12">
      {/* Hero Welcome Card */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_30px_rgba(22,42,54,0.06)] p-6 sm:p-12 text-center relative overflow-hidden">
        {/* Subtle decorative background accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#162a36] via-[#1b4332] to-[#c59b27]" />

        {/* Clean unboxed metadata with typographic separators */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-4">
          <span>Diagnóstico Psicológico</span>
          <span aria-hidden="true">·</span>
          <span>Inteligência Comportamental</span>
          <span aria-hidden="true">·</span>
          <span>100% Confidencial</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-[1.15] mb-5 max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
          Descubra quais sabotadores mentais comandam suas decisões e hábitos
        </h1>

        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Todos nós temos padrões automáticos inconscientes que sabotam nosso potencial, geram ansiedade e drenam nossas relações e realizações. 
          Este teste mapeia quais dos <strong className="font-semibold text-stone-900">9 Sabotadores da Mente</strong> estão mais ativos em você — desmascarando as narrativas mentais limitantes para que você aja com clareza, serenidade e maestria.
        </p>

        {/* Unboxed Key Metrics */}
        <div className="flex items-center justify-center gap-6 sm:gap-12 py-5 border-y border-stone-100 mb-8 max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#162a36] tabular-nums">45</span>
            <span className="text-xs sm:text-sm text-stone-500 font-medium">Afirmações</span>
          </div>
          <div className="h-8 w-px bg-stone-200" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1b4332] tabular-nums">9</span>
            <span className="text-xs sm:text-sm text-stone-500 font-medium">Arquétipos</span>
          </div>
          <div className="h-8 w-px bg-stone-200" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-700 tabular-nums">~5</span>
            <span className="text-xs sm:text-sm text-stone-500 font-medium">Minutos</span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
          <button
            onClick={onStart}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#1b4332] hover:bg-[#143225] text-white font-medium text-sm sm:text-base rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Iniciar Avaliação (45 Questões)</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>

          <button
            onClick={onLoadSample}
            className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm sm:text-base rounded-xl transition-all shadow-xs hover:shadow active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            title="Carregar um teste demonstrativo completo imediatamente"
          >
            <Sparkles className="w-4 h-4 text-amber-900" />
            <span>Ver Relatório Fictício de Exemplo</span>
          </button>

          <button
            onClick={onOpenGuide}
            className="w-full sm:w-auto px-5 py-3.5 bg-stone-100 hover:bg-stone-200/80 text-stone-800 font-medium text-sm sm:text-base rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4 text-stone-600" />
            <span>Enciclopédia</span>
          </button>
        </div>

        {/* Quick simulation notice */}
        <div className="mt-5 pt-4 border-t border-stone-100 max-w-lg mx-auto flex items-center justify-center gap-2 text-xs text-stone-500">
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block shrink-0" />
        </div>
      </div>

      {/* Scale Instructions Card */}
      <div className="bg-stone-100/70 border border-stone-200/80 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4 text-amber-600" />
          <span>Como Responder à Avaliação</span>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-2">
          Classifique cada afirmação em uma escala de 1 a 5
        </h2>
        <p className="text-sm text-stone-600 leading-relaxed mb-6 max-w-3xl">
          Avalie com que frequência o pensamento, sentimento ou atitude se aplica à sua rotina, carreira e relacionamentos. 
          Não há respostas certas ou erradas: quanto mais sincero você for, mais preciso e libertador será o seu diagnóstico.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {RATING_SCALE.map((s) => (
            <div
              key={s.val}
              className="bg-white border border-stone-200 rounded-xl p-3.5 text-center flex flex-col items-center justify-center shadow-xs"
            >
              <span className="w-7 h-7 rounded-full bg-[#162a36] text-amber-300 text-xs font-bold flex items-center justify-center mb-1.5 tabular-nums">
                {s.val}
              </span>
              <span className="font-semibold text-stone-900 text-sm mb-0.5">{s.label}</span>
              <span className="text-[11px] text-stone-500 leading-tight">{s.hint}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology & Value Proposition */}
      <section id="metodologia" className="space-y-6 pt-2">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">
            Metodologia & Fundamentos
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
            Por que mapear seus sabotadores transforma seus resultados?
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Baseado na ciência da Inteligência Positiva (Positive Intelligence) e neurociência comportamental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              01. Identificação dos Pontos Cegos
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Descubra os padrões invisíveis que causam estresse crônico, procrastinação, perfeccionismo paralisante ou sobrecarga emocional.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              02. Substituição da Culpa por Autoliderança
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Compreenda que seus sabotadores são mecanismos primitivos de defesa do cérebro. Ao rotulá-los, você desarma seu poder automático.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#162a36] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              03. Estratégias Customizadas de Neutralização
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Receba diretrizes práticas e antídotos comportamentais específicos para seus dois sabotadores dominantes, fortalecendo sua mente sábia.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner in Welcome */}
      <div className="bg-[#162a36] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
          Pronto para assumir o comando consciente da sua mente?
        </h2>
        <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto">
          Leva apenas 5 minutos e fornecerá um mapa profundo sobre sua forma de pensar, reagir e se relacionar.
        </p>
        <div className="pt-2">
          <button
            onClick={onStart}
            className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#162a36] font-semibold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer inline-flex items-center gap-2"
          >
            <span>Começar o Teste Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
