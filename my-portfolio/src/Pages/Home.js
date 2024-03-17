import React from "react";
import Statusbar from "../Layout/Statusbar";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Data from "../Components/Data";
import { Container, Row, Col } from "react-bootstrap";

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
