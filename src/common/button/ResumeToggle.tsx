import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "../styles/resume_toggle.css";

const ResumeToggle: React.FC = () => {
  const { resume_section, set_resume_section } = useTheme();

  const handle_section_change = (section: number) => {
    set_resume_section(section);
  };

  return (
    <div className="resume_toggle_container">
      <span className="resume_toggle_label">RESUME</span>
      <div className="resume_dots_container">
        {[1, 2, 3, 4, 5].map((section) => (
          <button
            key={section}
            className={`resume_dot ${
              resume_section === section ? "active" : ""
            }`}
            onClick={() => handle_section_change(section)}
            aria-label={`Resume section ${section}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeToggle;
