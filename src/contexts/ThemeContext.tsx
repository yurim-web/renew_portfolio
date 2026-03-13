/**
 * 테마 & 섹션 상태 관리 Context
 *
 * - isDarkMode: 다크모드 토글 (localStorage에 저장, data-theme 속성으로 CSS 제어)
 * - resumeSection: 현재 활성화된 섹션 번호 (ResumeToggle 도트 네비게이터와 연동)
 */
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  resumeSection: number;
  setResumeSection: (section: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [resumeSection, setResumeSectionState] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const setResumeSection = (section: number) => {
    setResumeSectionState(section);
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
    resumeSection,
    setResumeSection,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
