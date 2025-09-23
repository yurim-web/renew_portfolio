import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "../styles/theme_toggle.css";

const ThemeToggle: React.FC = () => {
  const { is_dark_mode, toggle_dark_mode } = useTheme();

  const scroll_to_top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="theme_toggle_container">
      <span className="theme_toggle_label">LIGHT</span>
      <button
        className={`theme_toggle_button ${
          is_dark_mode ? "dark_mode" : "light_mode"
        }`}
        onClick={toggle_dark_mode}
        aria-label={
          is_dark_mode ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        <div className="theme_toggle_circle"></div>
      </button>
      <div className="theme_toggle_bottom" onClick={scroll_to_top}>
        <span className="theme_toggle_bottom_text">TOP</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
