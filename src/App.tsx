/**
 * 포트폴리오 루트 컴포넌트
 *
 * 각 섹션은 id를 가지며, 앵커 내비게이션(#about, #strength 등)으로 이동합니다.
 * ThemeProvider가 전체를 감싸 다크모드와 섹션 추적 상태를 공유합니다.
 * ResumeToggle(도트 네비게이터)과 ThemeToggle(다크모드 스위치)은 화면에 고정 표시됩니다.
 */
import React from 'react';

import ResumeToggle from './common/button/ResumeToggle';
import ThemeToggle from './common/button/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './pages/header';
import Main from './pages/main';
import Portfolio from './pages/portfolio';
import ProfessionalProjects from './pages/professional_projects';
import Project from './pages/project';
import Skills from './pages/skills';
import WebDesign from './pages/web_design';

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
