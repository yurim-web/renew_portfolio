/**
 * 스킬 토글 버튼 목록 컴포넌트
 *
 * skillsData.ts의 skillNames를 기반으로 토글 버튼들을 렌더링합니다.
 * 클릭 시 해당 스킬의 카드가 강조 표시됩니다.
 */
import React from 'react';

import { skillNames } from '../../data/skillsData';
import '../../styles/skills.css';
import StrengthToggle from '../button/StrengthToggle';

interface StrengthToggleBoxProps {
  activeSkill: string | null;
  onSkillChange: (skill: string) => void;
}

const StrengthToggleBox: React.FC<StrengthToggleBoxProps> = ({ activeSkill, onSkillChange }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="strength_toggle_container">
      {skillNames.map(skill => (
        <div key={skill} className="toggle_wrapper">
          <StrengthToggle
            strength={skill}
            isActive={activeSkill === skill}
            onClick={onSkillChange}
          />
        </div>
      ))}
    </div>
  );
};

export default StrengthToggleBox;
