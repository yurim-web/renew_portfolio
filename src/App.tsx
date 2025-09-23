import React from "react";
import Header from "./pages/header";
import About from "./pages/about";
import Main from "./pages/main";
import Skills from "./pages/skills";
import Project from "./pages/project";
import ProfessionalProjects from "./pages/professional_projects";
import Portfolio from "./pages/portfolio";
import WebDesign from "./pages/web_design";
import Contact from "./pages/contact";
import { ThemeProvider } from "./contexts/ThemeContext";
import ResumeToggle from "./common/button/ResumeToggle";
import ThemeToggle from "./common/button/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Main />
        <div id="about">
          <About />
        </div>
        <div id="strength">
          <Skills />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="professional">
          <ProfessionalProjects />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="web_design">
          <WebDesign />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <ResumeToggle />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
