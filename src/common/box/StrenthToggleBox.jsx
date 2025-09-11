import React from "react";
import StrengthToggle from "../button/StrengthToggle";
import "../../styles/skills.css";

const StrenthToggleBox = ({ activeSkill, onSkillChange }) => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Gsap.js",
    "API",
    "Git/Github",
    "Notion",
    "Photoshop",
    "Illustrator",
  ];

  return (
    <div className="strength_toggle_container">
      {skills.map((skill) => (
        <StrengthToggle
          key={skill}
          strength={skill}
          isActive={activeSkill === skill}
          onClick={onSkillChange}
        />
      ))}
    </div>
  );
};

export default StrenthToggleBox;
