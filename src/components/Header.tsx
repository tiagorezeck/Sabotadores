import React from 'react';
import { Compass, BookOpen, RotateCcw } from 'lucide-react';

interface HeaderProps {
  currentScreen: 'welcome' | 'quiz' | 'results';
  onNavigateHome: () => void;
  onOpenGuide: () => void;
  onRestart?: () => void;
  onLoadSample?: () => void;
  hasStarted?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigateHome,
  onOpenGuide,
  onRestart,
  onLoadSample,
  hasStarted = false
}) => {
  return (
    <header className="w-full bg-[#162a36] text-stone-100 border-b border-[#254252] sticky top-0 z-40 transition-colors shrink-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <button
          onClick={onNavigateHome}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          title="Ir para a página inicial"
        >
          <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-stone-100 group-hover:text-amber-300 transition-colors whitespace-nowrap">
            Sabotadores da Mente
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-stone-300">
          <button
            onClick={onNavigateHome}
            className={`cursor-pointer transition-colors hover:text-white ${
              currentScreen === 'welcome' ? 'text-amber-300 underline underline-offset-8 decoration-amber-400' : ''
            }`}
          >
            Início
          </button>

          <button
            onClick={onOpenGuide}
            className="cursor-pointer transition-colors hover:text-white flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Os 9 Sabotadores</span>
          </button>

          <a
            href="#metodologia"
            onClick={(e) => {
              if (currentScreen !== 'welcome') {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="cursor-pointer transition-colors hover:text-white"
          >
            Metodologia
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {onLoadSample && currentScreen !== 'results' && (
            <button
              onClick={onLoadSample}
              className="px-3 py-1.5 text-xs font-medium text-amber-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              title="Carregar teste fictício de exemplo para ver o relatório completo imediatamente"
            >
              <span>Ver Exemplo</span>
            </button>
          )}

          {currentScreen === 'quiz' && hasStarted && (
            <button
              onClick={onRestart}
              className="px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              title="Recomeçar o teste desde o início"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Recomeçar</span>
            </button>
          )}

          <button
            onClick={onOpenGuide}
            className="px-3.5 py-1.5 text-xs font-medium text-[#162a36] bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-xs hover:shadow-sm active:scale-[0.98] flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 font-sans"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Guia dos Arquétipos</span>
          </button>
        </div>
      </div>
    </header>
  );
};
