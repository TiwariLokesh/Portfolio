import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <p>Hello, My name is</p>
            <h3>Lokesh Tiwari</h3>
<h4>Iam a Web Developer</h4>
          </Col>

          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
