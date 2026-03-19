/**
 * 섹션 상태 관리 Context
 *
 * - resumeSection: 현재 활성화된 섹션 번호 (ResumeToggle 도트 네비게이터와 연동)
 */
import React, { createContext, useContext, useState } from 'react';

interface SectionContextType {
  resumeSection: number;
  setResumeSection: (section: number) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSection = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};

interface SectionProviderProps {
  children: React.ReactNode;
}

export const SectionProvider: React.FC<SectionProviderProps> = ({ children }) => {
  const [resumeSection, setResumeSectionState] = useState<number>(1);

  const setResumeSection = (section: number) => {
    setResumeSectionState(section);
  };

  const value = {
    resumeSection,
    setResumeSection,
  };

  return <SectionContext.Provider value={value}>{children}</SectionContext.Provider>;
};
