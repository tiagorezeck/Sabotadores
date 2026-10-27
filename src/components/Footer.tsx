import React from 'react';

interface FooterProps {
  onOpenGuide: () => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide, onNavigateHome }) => {
  return (
    <footer className="w-full bg-[#11212b] text-stone-300 border-t border-[#1c3645] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <button
              onClick={onNavigateHome}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Sabotadores da Mente
              </span>
            </button>
            <p className="text-xs text-stone-400 mt-1 max-w-md">
              Diagnóstico comportamental para desvendar padrões inconscientes e potencializar autoliderança, bem-estar e resultados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-300">
            <button
              onClick={onNavigateHome}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Início do Teste
            </button>
            <button
              onClick={onOpenGuide}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Guia dos 9 Sabotadores
            </button>
            <a
              href="#metodologia"
              onClick={onNavigateHome}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Metodologia
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="text-center sm:text-left">
            <span>Baseado na metodologia de Inteligência Positiva (Positive Intelligence) de Shirzad Chamine.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Privacidade Respeitada</span>
            <span aria-hidden="true">·</span>
            <span>Sem Coleta de Dados Pessoais</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
