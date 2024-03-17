import React from "react";
import Statusbar from "../Layout/Statusbar";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";



function Home() {
  return (
    <>
      <Statusbar />
      <Hero />
      <Projects/>
    </>
  );
}

export default Home;
