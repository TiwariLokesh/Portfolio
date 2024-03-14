import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Stylings/Home.css";
function Hero() {
  return (
    <div>
      <Container className="pb-5 pt-5">
        <Row>
          <Col md={6} className="p-4">
            <p className="hero-para">
              <i>Hello!!!</i>
            </p>
            <h3 className="hero-h3">
              I'm <span>Lokesh Tiwari</span>
            </h3>
            <h4 className="hero-h4 py-1">
              Iam a <span className="special">Web Developer</span>
            </h4>
            <p className="hero-content mt-4 text-left">
              Greetings, I am Lokesh Tiwari, an accomplished{" "}
              <span className="special">Full Stack Developer</span> at <span className="special">Godigitify Nexus. </span>
              With over a <span className="special">1+</span> year of
              industry experience, I am fervently dedicated to harnessing web
              technologies to craft captivating digital experiences. My
              proficiency extends across the entire spectrum of web development,
              encompassing both front-end and back-end domains.
            </p>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/lokesh-tiwari-ab7391253/"
                target="_blank"
              >
                <i
                  className="icon fa-brands fa-linkedin"
                  style={{ color: "#000000" }}
                ></i>
              </a>
              <a
                href="https://github.com/TiwariLokesh?tab=overview&from=2024-03-01&to=2024-03-14"
                target="_blank"
              >
                <i
                  className="icon fab fa-github"
                  style={{ color: "#000000" }}
                ></i>
              </a>
              <a
                href="https://www.instagram.com/lokeshtiwari212/"
                target="_blank"
              >
                <i
                  className="icon fa-brands fa-instagram"
                  style={{ color: "#000000" }}
                ></i>
              </a>
            </div>
            <a href="#">  <Button variant=" button-color px-3 my-4">Download CV</Button></a>
          </Col>

          <Col md={6} className="p-3"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
