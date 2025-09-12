import React from "react";
import Header from "./pages/header";
import About from "./pages/about";
import Main from "./pages/main";
import Skills from "./pages/skills";
import Work from "./pages/work";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
