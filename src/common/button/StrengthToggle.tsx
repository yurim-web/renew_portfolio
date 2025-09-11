import React from "react";
import "../../styles/skills.css";

interface StrengthToggleProps {
  strength: string;
  isActive: boolean;
  onClick: (skill: string) => void;
}

const StrengthToggle: React.FC<StrengthToggleProps> = ({
  strength,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`strength_toggle ${isActive ? "active" : ""}`}
      onClick={() => onClick(strength)}
    >
      {strength}
    </div>
  );
};

export default StrengthToggle;
