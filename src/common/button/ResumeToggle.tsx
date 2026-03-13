/**
 * 섹션 도트 네비게이터 (화면 좌측 고정)
 *
 * - 7개 섹션에 대응하는 도트 버튼을 렌더링
 * - 스크롤 위치에 따라 현재 섹션을 자동 감지하여 활성 도트 표시
 * - 도트 클릭 시 해당 섹션으로 부드러운 스크롤 이동
 */
import React, { useEffect } from 'react';

import { useTheme } from '../../contexts/ThemeContext';
import '../styles/resume_toggle.css';

const sectionData = [
  { id: 1, label: 'ABOUT', color: '#00d4aa', elementId: 'about' },
  { id: 2, label: 'STRENGTH', color: '#ff6b6b', elementId: 'strength' },
  { id: 3, label: 'PROJECT', color: '#4ecdc4', elementId: 'project' },
  { id: 4, label: 'PROFESSIONAL', color: '#45b7d1', elementId: 'professional' },
  { id: 5, label: 'LEARNING', color: '#96ceb4', elementId: 'portfolio' },
  { id: 6, label: 'WEB DESIGN', color: '#feca57', elementId: 'web_design' },
  { id: 7, label: 'CONTACT', color: '#ff9ff3', elementId: 'contact' },
];

const ResumeToggle: React.FC = () => {
  const { resumeSection, setResumeSection } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionData.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionData[i].elementId);
        if (element && element.offsetTop <= scrollPosition) {
          setResumeSection(sectionData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setResumeSection]);

  const handleSectionChange = (section: number) => {
    setResumeSection(section);

    const targetElement = document.getElementById(sectionData[section - 1].elementId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="resume_toggle_container">
      <div className="resume_dots_container">
        {sectionData.map(section => (
          <button
            key={section.id}
            className={`resume_dot ${resumeSection === section.id ? 'active' : ''}`}
            onClick={() => handleSectionChange(section.id)}
            aria-label={`${section.label} section`}
            style={
              {
                '--active-color': section.color,
                '--active-color-shadow': `${section.color}80`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeToggle;
