import React from "react";

//import NavBar from "./common/NavBar";
import Home from "./screens/Home";
import About from "./screens/About";
import Qualifications from "./screens/Qualifications";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

function App() {
  return (
    <>
      <Home />
      <About />
      <Qualifications/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
