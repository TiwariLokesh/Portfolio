import React from "react";
import Statusbar from "../Layout/Statusbar";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";



function Home() {
  return (
    <>
      <Statusbar />
      <Hero />
      <Skills/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default Home;
