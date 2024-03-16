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
      <Container>
        < className="justify-content-center"> {/* Center align the columns */}
          {Data.map((row, index) => (
            <Col key={index} lg={4} md={6} className="mb-4"> {/* Add margin bottom */}
              <Projects data={row} />
            </Col>
          ))}
        <
      </Container>
    </>
  );
}

export default Home;
