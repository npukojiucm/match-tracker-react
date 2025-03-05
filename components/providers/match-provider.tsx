'use client';

import { createContext, useContext, useState, ReactNode, JSX } from 'react';
import { Match } from '@/types/types';

interface MatchContextType {
  matches: Match[] | null;
  isLoading: boolean;
  error: string | null;
  loadMatches: () => Promise<void>;
}

const MatchContext = createContext<MatchContextType | undefined>(undefined);

export const MatchProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [matches, setMatches] = useState<Match[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadMatches = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://app.ftoyd.com/fronttemp-service/fronttemp');
      const data = await response.json();

      setMatches(data.data.matches);
    } catch (error) {
      setError('Ошибка: не удалось загрузить информацию');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MatchContext.Provider value={{ matches, isLoading, error, loadMatches }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatchContext = (): MatchContextType => {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error('useMatchContext должен использоваться внутри MatchProvider');
  }
  return context;
};
