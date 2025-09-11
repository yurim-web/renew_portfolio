import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StrengthContentsBox from "../common/box/StrengthContentsBox";
import StrenthToggleBox from "../common/box/StrenthToggleBox";
import "../styles/skills.css";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSkillChange = (skill: string) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  useEffect(() => {
    // 애니메이션 제거 - 바로 표시
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <article ref={sectionRef} className="strength">
      <h1 ref={titleRef} className="strength_title">
        Strength.
      </h1>
      <StrenthToggleBox
        activeSkill={activeSkill}
        onSkillChange={handleSkillChange}
      />
      <StrengthContentsBox activeSkill={activeSkill} />
    </article>
  );
};

export default Skills;
