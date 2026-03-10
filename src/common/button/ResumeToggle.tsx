import React, { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import '../styles/resume_toggle.css';

// 섹션별 데이터 정의
const section_data = [
  { id: 1, label: 'ABOUT', color: '#00d4aa', element_id: 'about' },
  { id: 2, label: 'STRENGTH', color: '#ff6b6b', element_id: 'strength' },
  { id: 3, label: 'PROJECT', color: '#4ecdc4', element_id: 'project' },
  {
    id: 4,
    label: 'PROFESSIONAL',
    color: '#45b7d1',
    element_id: 'professional',
  },
  { id: 5, label: 'LEARNING', color: '#96ceb4', element_id: 'portfolio' },
  { id: 6, label: 'WEB DESIGN', color: '#feca57', element_id: 'web_design' },
  { id: 7, label: 'CONTACT', color: '#ff9ff3', element_id: 'contact' },
];

const ResumeToggle: React.FC = () => {
  const { resume_section, set_resume_section } = useTheme();

  // 스크롤 감지하여 현재 섹션 업데이트
  useEffect(() => {
    const handle_scroll = () => {
      const scroll_position = window.scrollY + 100; // 헤더 높이 고려

      for (let i = section_data.length - 1; i >= 0; i--) {
        const element = document.getElementById(section_data[i].element_id);
        if (element && element.offsetTop <= scroll_position) {
          set_resume_section(section_data[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handle_scroll);
    return () => window.removeEventListener('scroll', handle_scroll);
  }, [set_resume_section]);

  const handle_section_change = (section: number) => {
    set_resume_section(section);

    // 해당 섹션으로 스크롤
    const target_element = document.getElementById(section_data[section - 1].element_id);
    if (target_element) {
      target_element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="resume_toggle_container">
      <div className="resume_dots_container">
        {section_data.map(section => (
          <button
            key={section.id}
            className={`resume_dot ${resume_section === section.id ? 'active' : ''}`}
            onClick={() => handle_section_change(section.id)}
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
