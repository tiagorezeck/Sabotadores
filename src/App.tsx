import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { SaboteursGuideModal } from './components/SaboteursGuideModal';
import { Footer } from './components/Footer';
import { SAMPLE_PROFILE_BALANCED } from './data/sampleProfiles';

const STORAGE_KEY_ANSWERS = 'sabotadores_mente_answers_v2';
const STORAGE_KEY_SCREEN = 'sabotadores_mente_screen_v2';
const STORAGE_KEY_IS_SAMPLE = 'sabotadores_mente_is_sample_v2';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'quiz' | 'results'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SCREEN);
      if (saved === 'quiz' || saved === 'results') return saved;
    } catch {
      // ignore
    }
    return 'welcome';
  });

  const [answers, setAnswers] = useState<(number | null)[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANSWERS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 45) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return new Array(45).fill(null);
  });

  const [isSample, setIsSample] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_IS_SAMPLE) === 'true';
    } catch {
      return false;
    }
  });

  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [selectedGuideKey, setSelectedGuideKey] = useState<string | undefined>(undefined);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SCREEN, currentScreen);
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(answers));
      localStorage.setItem(STORAGE_KEY_IS_SAMPLE, isSample ? 'true' : 'false');
    } catch {
      // ignore
    }
  }, [currentScreen, answers, isSample]);

  const handleStartQuiz = () => {
    setIsSample(false);
    setCurrentScreen('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadSample = () => {
    setIsSample(true);
    setAnswers([...SAMPLE_PROFILE_BALANCED.answers]);
    setCurrentScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (index: number, val: number) => {
    setAnswers(prev => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  };

  const handleCompleteQuiz = () => {
    setCurrentScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setAnswers(new Array(45).fill(null));
    setCurrentScreen('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartFromHeader = () => {
    if (window.confirm('Deseja realmente recomeçar o teste do início? Suas respostas atuais serão limpas.')) {
      setAnswers(new Array(45).fill(null));
      setCurrentScreen('quiz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenGuide = (saboteurKey?: string) => {
    setSelectedGuideKey(saboteurKey);
    setIsGuideOpen(true);
  };

  const handleCloseGuide = () => {
    setIsGuideOpen(false);
    setSelectedGuideKey(undefined);
  };

  const handleNavigateHome = () => {
    setCurrentScreen('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasStarted = answers.some(a => a !== null);

  return (
    <div className={`min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 selection:bg-amber-200 selection:text-amber-950 font-sans ${
      currentScreen === 'quiz' ? 'h-screen max-h-screen overflow-hidden' : ''
    }`}>
      <Header
        currentScreen={currentScreen}
        onNavigateHome={handleNavigateHome}
        onOpenGuide={() => handleOpenGuide()}
        onRestart={handleRestartFromHeader}
        onLoadSample={handleLoadSample}
        hasStarted={hasStarted}
      />

      <main className={`flex-1 w-full ${currentScreen === 'quiz' ? 'overflow-hidden flex flex-col justify-center' : ''}`}>
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onStart={handleStartQuiz}
            onOpenGuide={() => handleOpenGuide()}
            onLoadSample={handleLoadSample}
          />
        )}

        {currentScreen === 'quiz' && (
          <QuizScreen
            answers={answers}
            onAnswer={handleAnswer}
            onComplete={handleCompleteQuiz}
            onExit={handleNavigateHome}
            onLoadSample={handleLoadSample}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen
            answers={answers}
            onRetake={handleRetake}
            onOpenGuide={(key) => handleOpenGuide(key)}
            isSample={isSample}
          />
        )}
      </main>

      {/* Only show bottom footer on welcome and results screens to keep quiz screen 100% scroll-free on notebook */}
      {currentScreen !== 'quiz' && (
        <Footer
          onOpenGuide={() => handleOpenGuide()}
          onNavigateHome={handleNavigateHome}
        />
      )}

      <SaboteursGuideModal
        isOpen={isGuideOpen}
        onClose={handleCloseGuide}
        selectedSaboteurKey={selectedGuideKey}
      />
    </div>
  );
}
