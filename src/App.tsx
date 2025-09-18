import React from "react";
import Header from "./pages/header";
import About from "./pages/about";
import Main from "./pages/main";
import Skills from "./pages/skills";
import Project from "./pages/project";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
