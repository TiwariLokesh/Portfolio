import React from "react";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Modals from '../Components/Modals'



function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <Experience/>
      <Projects/>
      <Modals/>
    </>
  );
}

export default Home;
