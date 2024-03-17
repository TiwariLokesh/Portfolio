import React from "react";
import Statusbar from "../Layout/Statusbar";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";



function Home() {
  return (
    <>
      <Statusbar />
      <Hero />
      <Experience/>
      <Projects/>
    </>
  );
}

export default Home;
