import React, { useEffect, useState, useCallback } from 'react';
import { ALL_QUESTIONS, RATING_SCALE, QuizQuestionItem } from '../data/saboteurs';
import { ArrowLeft, ArrowRight, Check, LayoutGrid, AlertCircle, X } from 'lucide-react';

interface QuizScreenProps {
  answers: (number | null)[];
  onAnswer: (index: number, val: number) => void;
  onComplete: () => void;
  onExit: () => void;
  onLoadSample?: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  answers,
  onAnswer,
  onComplete,
  onExit: _onExit,
  onLoadSample
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(() => {
    // Resume at first unanswered question or 0
    const firstUnanswered = answers.findIndex(a => a === null);
    return firstUnanswered === -1 ? 0 : firstUnanswered;
  });

  const [showQuestionMap, setShowQuestionMap] = useState<boolean>(false);

  const totalQuestions = ALL_QUESTIONS.length;
  const currentQ: QuizQuestionItem = ALL_QUESTIONS[currentIdx];
  const selectedAnswer = answers[currentIdx];
  const progressPct = Math.round(((currentIdx + 1) / totalQuestions) * 100);
  const totalAnswered = answers.filter(a => a !== null).length;

  const handleSelect = useCallback((val: number) => {
    onAnswer(currentIdx, val);
  }, [currentIdx, onAnswer]);

  const handleNext = useCallback(() => {
    if (answers[currentIdx] === null) return;
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      onComplete();
    }
  }, [answers, currentIdx, totalQuestions, onComplete]);

  const handleBack = useCallback(() => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  }, [currentIdx]);

  // Keyboard navigation support (1-5, Arrows, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (['1', '2', '3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        const val = parseInt(e.key, 10);
        handleSelect(val);
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (answers[currentIdx] !== null) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleBack();
      } else if (e.key === 'Escape' && showQuestionMap) {
        setShowQuestionMap(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIdx, answers, showQuestionMap, handleSelect, handleNext, handleBack]);

  return (
    <div className="w-full h-[calc(100dvh-3.5rem)] max-h-[calc(100dvh-3.5rem)] overflow-hidden flex flex-col justify-center items-center px-3 sm:px-6 py-2 select-none relative">
      <div className="w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-4 sm:p-6 md:p-8 flex flex-col justify-between relative max-h-full overflow-y-auto md:overflow-hidden">
        
        {/* Top Progress & Header Bar */}
        <div className="space-y-2 mb-3 sm:mb-4">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-stone-900 tabular-nums">
                Questão {currentIdx + 1} de {totalQuestions}
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-amber-800 font-semibold">
                {currentQ.saboteurName}
              </span>
              <span className="text-[11px] text-stone-400 hidden lg:inline">
                ({currentQ.questionIndex + 1}/5)
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {onLoadSample && (
                <button
                  onClick={onLoadSample}
                  className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                  title="Pular preenchimento manual e carregar um teste fictício completo"
                >
                  <span className="hidden sm:inline">Preencher</span> Teste Fictício
                </button>
              )}

              <span className="tabular-nums font-semibold text-[#1b4332] text-xs sm:text-sm">
                {progressPct}% concluído
              </span>

              <button
                onClick={() => setShowQuestionMap(prev => !prev)}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 text-xs ${
                  showQuestionMap 
                    ? 'bg-stone-900 text-white' 
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                }`}
                title="Ver mapa com todas as 45 questões"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline font-mono">({totalAnswered}/45)</span>
              </button>
            </div>
          </div>

          {/* Smooth slim progress line */}
          <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#162a36] via-[#1b4332] to-amber-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Question Statement Box */}
        <div className="my-auto py-2 sm:py-3 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-50/90 px-2.5 py-0.5 rounded-md border border-amber-200/70">
            <span>Dimensão Avaliada</span>
            <span aria-hidden="true">·</span>
            <span>{currentQ.saboteurName}</span>
          </div>

          <h2
            className="font-serif text-lg sm:text-2xl md:text-[27px] font-semibold text-stone-900 leading-snug tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            "{currentQ.text}"
          </h2>
        </div>

        {/* 5 Response Options: Horizontal 5-Column Grid on Notebook, Compact Stack on Mobile */}
        <div className="my-auto pt-1 sm:pt-2 space-y-2">
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-stone-500 font-medium">
            <span>Com que frequência esse pensamento ou atitude se aplica a você?</span>
            <span className="hidden sm:inline text-stone-400 font-mono">Teclas 1 a 5</span>
          </div>

          {/* 5-Option Likert Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-2.5">
            {RATING_SCALE.map((scaleItem) => {
              const isSelected = selectedAnswer === scaleItem.val;
              return (
                <button
                  key={scaleItem.val}
                  onClick={() => handleSelect(scaleItem.val)}
                  className={`w-full p-2.5 sm:p-3 md:p-3.5 rounded-xl border transition-all text-left sm:text-center flex sm:flex-col items-center justify-between sm:justify-center cursor-pointer group relative ${
                    isSelected
                      ? 'border-[#1b4332] bg-emerald-50/90 shadow-xs ring-2 ring-[#1b4332]'
                      : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/90'
                  }`}
                >
                  <div className="flex sm:flex-col items-center gap-2.5 sm:gap-1.5">
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm tabular-nums transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-[#1b4332] text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 group-hover:bg-stone-200'
                      }`}
                    >
                      {scaleItem.val}
                    </span>

                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-stone-900 leading-tight">
                        {scaleItem.label}
                      </div>
                      <div className="text-[10px] text-stone-500 mt-0.5 leading-tight hidden lg:block">
                        {scaleItem.hint}
                      </div>
                    </div>
                  </div>

                  {/* Keyboard badge or selected check */}
                  <div className="flex items-center sm:hidden">
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                  {/* Desktop check indicator */}
                  {isSelected && (
                    <div className="hidden sm:flex absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-emerald-700 text-white items-center justify-center shadow-xs">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation & Controls */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-stone-100 gap-3">
          <button
            onClick={handleBack}
            disabled={currentIdx === 0}
            className={`px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              currentIdx === 0
                ? 'opacity-30 border-stone-200 text-stone-400 cursor-not-allowed'
                : 'border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-stone-600">
            <span>Dica: Use as teclas</span>
            <kbd className="px-1.5 py-0.5 bg-stone-100 border border-stone-300 rounded font-mono text-[10px] text-stone-700 font-semibold">1-5</kbd>
            <span>e</span>
            <kbd className="px-1.5 py-0.5 bg-stone-100 border border-stone-300 rounded font-mono text-[10px] text-stone-700 font-semibold">Enter</kbd>
          </div>

          <div className="flex items-center gap-2">
            {selectedAnswer === null && (
              <span className="text-[11px] text-amber-800 flex items-center gap-1 hidden sm:inline-flex">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Escolha 1 a 5</span>
              </span>
            )}

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-xs cursor-pointer ${
                selectedAnswer === null
                  ? 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none'
                  : currentIdx === totalQuestions - 1
                  ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md hover:shadow-lg active:scale-[0.98]'
                  : 'bg-[#1b4332] hover:bg-[#143225] text-white shadow-sm hover:shadow active:scale-[0.98]'
              }`}
            >
              <span>{currentIdx === totalQuestions - 1 ? 'Ver Meus Resultados' : 'Avançar'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Question Map Modal Overlay (Keeps single screen without scrolling) */}
        {showQuestionMap && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xs rounded-2xl md:rounded-3xl p-5 sm:p-6 z-20 flex flex-col justify-between border border-stone-200 animate-in fade-in duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  Mapa Completo das 45 Questões
                </h3>
                <p className="text-xs text-stone-500">
                  Respostas preenchidas: <strong className="text-emerald-700 font-semibold">{totalAnswered} de 45</strong>
                </p>
              </div>

              <button
                onClick={() => setShowQuestionMap(false)}
                className="p-1.5 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Fechar mapa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-9 sm:grid-cols-15 gap-1.5 my-auto max-h-[60vh] overflow-y-auto p-1">
              {ALL_QUESTIONS.map((q, idx) => {
                const isAnswered = answers[idx] !== null;
                const isCurrent = idx === currentIdx;
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIdx(idx);
                      setShowQuestionMap(false);
                    }}
                    className={`h-7 sm:h-8 rounded-md text-[11px] sm:text-xs font-medium tabular-nums transition-colors cursor-pointer flex items-center justify-center ${
                      isCurrent
                        ? 'ring-2 ring-amber-500 font-bold bg-[#162a36] text-white'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                    }`}
                    title={`Questão ${idx + 1} (${q.saboteurName})`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-200 border border-emerald-400 inline-block" />
                  Respondida
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-200 inline-block" />
                  Pendente
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#162a36] inline-block" />
                  Atual
                </span>
              </div>

              <button
                onClick={() => setShowQuestionMap(false)}
                className="px-3 py-1.5 bg-stone-900 text-white rounded-lg text-xs font-medium cursor-pointer"
              >
                Voltar à Questão
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
