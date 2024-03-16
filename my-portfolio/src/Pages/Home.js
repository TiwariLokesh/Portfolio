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
        <Row>
          {Data.map((row, index) => ( // Added 'index' for the key prop
            <Col key={index} lg={4} md={6}> {/* Specify lg and md props */}
              <Projects data={row} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
