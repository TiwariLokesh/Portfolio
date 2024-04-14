import React from "react";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Service from '../Components/Service'
import Footer from "../Layout/Footer";



function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <Experience/>
      <Projects/>
      <Service/>
      <Footer/>
      
    </>
  );
}

export default Home;
