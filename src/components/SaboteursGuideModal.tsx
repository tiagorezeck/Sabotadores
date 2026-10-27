import React, { useState } from 'react';
import { SABOTEURS, MASTER_SABOTEUR, Saboteur, MasterSaboteur } from '../data/saboteurs';
import {
  X,
  ShieldAlert,
  Sparkles,
  ChevronRight,
  BookOpen,
  Crown,
  Brain,
  Heart,
  Zap,
  Flame,
  Shield,
  Lightbulb
} from 'lucide-react';

interface SaboteursGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSaboteurKey?: string;
}

export const SaboteursGuideModal: React.FC<SaboteursGuideModalProps> = ({
  isOpen,
  onClose,
  selectedSaboteurKey
}) => {
  const [activeKey, setActiveKey] = useState<string>(selectedSaboteurKey || SABOTEURS[0].key);

  if (!isOpen) return null;

  const isMaster = activeKey === MASTER_SABOTEUR.key;
  const currentSaboteur: Saboteur | undefined = SABOTEURS.find(s => s.key === activeKey);
  const activeItem: Saboteur | MasterSaboteur = isMaster ? MASTER_SABOTEUR : (currentSaboteur || SABOTEURS[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-5xl h-[94vh] max-h-[94vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col border border-stone-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-modal-title"
      >
        {/* Modal Header */}
        <div className="px-5 py-3.5 sm:px-6 sm:py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#162a36] text-amber-300 flex items-center justify-center shadow-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 id="guide-modal-title" className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                Enciclopédia Completa dos Sabotadores da Mente
              </h2>
              <p className="text-xs text-stone-500 hidden sm:block">
                Fundamentado na metodologia de Inteligência Positiva (Positive Intelligence) de Shirzad Chamine
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar guia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Split view layout */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          {/* Left Sidebar: List of Saboteurs */}
          <div className="w-full md:w-72 border-r border-stone-200 bg-stone-50/70 overflow-y-auto max-h-44 md:max-h-none p-3 space-y-1 shrink-0 select-none">
            
            {/* Master Saboteur Button */}
            <div className="mb-2">
              <div className="text-[10px] font-bold text-amber-900 uppercase tracking-wider px-2 py-1 flex items-center gap-1">
                <Crown className="w-3 h-3 text-amber-600" />
                <span>O Sabotador Mestre Universal</span>
              </div>

              <button
                onClick={() => setActiveKey(MASTER_SABOTEUR.key)}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm cursor-pointer ${
                  isMaster
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                    : 'text-stone-800 bg-amber-50/70 hover:bg-amber-100/80 border border-amber-200/60 font-semibold'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Crown className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                  <span>{MASTER_SABOTEUR.name}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isMaster ? 'translate-x-0.5' : 'opacity-40'}`} />
              </button>
            </div>

            {/* 9 Accomplice Saboteurs List */}
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider px-2 pt-2 pb-1">
              Os 9 Sabotadores Cúmplices
            </div>

            {SABOTEURS.map((s, index) => {
              const isSelected = activeKey === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveKey(s.key)}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm cursor-pointer ${
                    isSelected
                      ? 'bg-[#162a36] text-white shadow-xs font-semibold'
                      : 'text-stone-700 hover:bg-stone-200/60 hover:text-stone-900 font-medium'
                  }`}
                >
                  <div className="truncate">
                    <span className="tabular-nums opacity-50 mr-2 text-[11px]">0{index + 1}.</span>
                    <span>{s.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      isSelected ? 'text-amber-300 translate-x-0.5' : 'text-stone-400 opacity-40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detail Pane (Deep Scrollable Dossier) */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 space-y-6 bg-white">
            
            {/* Header of Dossier */}
            <div className="border-b border-stone-100 pb-5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                <span>{isMaster ? 'Maestro Universal de Todos os Sabotadores' : `Arquétipo Cúmplice`}</span>
                <span>·</span>
                <span className="font-mono text-stone-500 font-medium">{activeItem.englishName}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
                {activeItem.name}
              </h3>

              <p className="text-sm sm:text-base text-stone-700 mt-2 leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            {/* Mentiras para Justificar (The Lie Box) */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Mentiras que ele conta para se justificar</span>
              </div>

              {'lies' in activeItem && Array.isArray(activeItem.lies) && activeItem.lies.length > 0 ? (
                <ul className="space-y-1.5 pt-1">
                  {activeItem.lies.map((lie, idx) => (
                    <li key={idx} className="font-serif text-sm sm:text-base italic text-amber-950 font-medium leading-snug flex items-start gap-2">
                      <span className="text-amber-500 font-bold not-italic">“</span>
                      <span>{lie}”</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-serif text-sm sm:text-base italic text-amber-950 font-medium">
                  "{'lie' in activeItem ? activeItem.lie : ''}"
                </p>
              )}
            </div>

            {/* Grid: Pensamentos vs Sentimentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pensamentos Típicos */}
              <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800">
                  <Brain className="w-4 h-4 text-[#162a36]" />
                  <span>Pensamentos Típicos (O Diálogo Interno)</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {activeItem.thoughts.map((thought, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#162a36] mt-1.5 shrink-0" />
                      <span className="italic">"{thought}"</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sentimentos Típicos */}
              <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800">
                  <Heart className="w-4 h-4 text-rose-700" />
                  <span>Sentimentos & Clima Emocional</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {activeItem.feelings.map((feeling, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                      <span>{feeling}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Características */}
            <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Características Principais de Comportamento</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                {activeItem.characteristics.map((char, i) => (
                  <div key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{char}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impacto em si mesmo e nos outros */}
            <div className="bg-stone-50/70 border border-stone-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900">
                <Flame className="w-4 h-4 text-orange-600" />
                <span>Impacto em Si Mesmo e nos Outros</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {activeItem.impact}
              </p>
            </div>

            {/* Função Original de Sobrevivência (Infância) */}
            <div className="bg-sky-50/60 border border-sky-200/70 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-900">
                <Shield className="w-4 h-4 text-sky-700" />
                <span>Função Original de Sobrevivência (Origem na Infância)</span>
              </div>
              <p className="text-xs sm:text-sm text-sky-950 leading-relaxed">
                {activeItem.survivalFunction}
              </p>
            </div>

            {/* Antídoto e Dica de Transformação */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Antídoto & Como Desarmar esse Padrão</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                {activeItem.antidote}
              </p>
              <div className="pt-2 border-t border-emerald-200/60 text-xs text-emerald-800 italic flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{activeItem.growthTip}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500 shrink-0">
          <span>Metodologia extraída do best-seller Inteligência Positiva de Shirzad Chamine</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
          >
            Fechar Enciclopédia
          </button>
        </div>
      </div>
    </div>
  );
};
