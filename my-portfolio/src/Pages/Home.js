import React from "react";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";



function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default Home;
