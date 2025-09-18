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
    "Git/Github",
    "SourceTree",
    "Notion",
    "Figma",
    "Photoshop",
    "Illustrator",
    "Cafe24",
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
