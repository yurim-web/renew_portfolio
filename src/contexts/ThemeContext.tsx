import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  is_dark_mode: boolean;
  toggle_dark_mode: () => void;
  resume_section: number;
  set_resume_section: (section: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [is_dark_mode, setIsDarkMode] = useState<boolean>(() => {
    const saved_theme = localStorage.getItem("theme");
    return saved_theme === "dark";
  });

  const [resume_section, setResumeSection] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem("theme", is_dark_mode ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      is_dark_mode ? "dark" : "light"
    );
  }, [is_dark_mode]);

  const toggle_dark_mode = () => {
    setIsDarkMode(!is_dark_mode);
  };

  const set_resume_section = (section: number) => {
    setResumeSection(section);
  };

  const value = {
    is_dark_mode,
    toggle_dark_mode,
    resume_section,
    set_resume_section,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
