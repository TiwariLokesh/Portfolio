import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <p>Hello, My name is</p>
            <h2>Lokesh Tiwari</h2>
          </Col>

          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
