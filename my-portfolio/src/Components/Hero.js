import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Stylings/Home.css";
function Hero() {
  return (
    <div>
      <Container className="pb-5 pt-5">
        <Row>
          <Col md={6} className="p-3">
            <p className="hero-para">
              <i>Hello!!!</i>
            </p>
            <h3 className="hero-h3">
              I'm <span>Lokesh Tiwari</span>
            </h3>
            <h4 className="hero-h4">Iam a Web Developer</h4>
            <p className="hero-content mt-5">
              Greetings, I am Lokesh Tiwari, an accomplished{" "}
              <span className="special">Full Stack Developer</span> currently
              serving at <span className="special">Godigitify Nexus. </span>
              Possessing over a <span className="special">1+</span> year of
              industry experience, I am fervently dedicated to harnessing web
              technologies to craft captivating digital experiences. My
              proficiency extends across the entire spectrum of web development,
              encompassing both front-end and back-end domains.
            </p>
            <div>
            <i className="fab fa-github" style={{ color: '#000000' }}></i>
            <i class="fa-brands fa-instagram" style={{color: "#000000"}}></i>
            </div>
          </Col>

          <Col md={6} className="p-3"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
