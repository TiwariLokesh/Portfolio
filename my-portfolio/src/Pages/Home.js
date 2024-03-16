import React from "react";
import Statusbar from "../Layout/Statusbar";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Data from "../Components/Data";
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <>
      <Statusbar></Statusbar>
      <Hero></Hero>
      <Container>
      {
      Data.map((row) => {
        return <Projects data={row}></Projects>;
      })
      }
      </Container>
     
    </>
  );
}

export default Home;
