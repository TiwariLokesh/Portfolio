import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <p><i>Hello!!!</i></p>
            <h3>I'm Lokesh Tiwari</h3>
<h4>Iam a Web Developer</h4>
<p>Greetings, I am Lokesh Tiwari, an accomplished Full Stack Developer currently serving at Godigitify Nexus. Possessing over a 1+ year of industry experience, I am fervently dedicated to harnessing web technologies to craft captivating digital experiences. My proficiency extends across the entire spectrum of web development, encompassing both front-end and back-end domains.</p>
          </Col>

          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
