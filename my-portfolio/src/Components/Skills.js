import React from "react";
import "../Stylings/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import html from "../Images/html.png";
import css from '../Images/css.png';
import js from '../Images/js.png';
import react from '../Images/react.png';
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Skills() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1
  };
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <div className="text-center project-heading">
          My <span>Skills</span>
        </div>
        <p className="project-para pb-5">
          Skills and Stacks Expertise Developed .
        </p>
      </Row>

      <Row>
        <Slider {...settings}>

          <Col lg={3} className="p-4">
            <div className="skills-div d-flex flex-column justify-content-center align-items-center">
              <img src={html}></img>
              <p className="my-2">HTML</p>
            </div>
          </Col>
          <Col lg={3} className="p-4">
          <div className="skills-div d-flex flex-column justify-content-center align-items-center">
              <img src={css}></img>
              <p className="my-2">CSS</p>
            </div>
          </Col>
          <Col lg={3} className="p-4">
          <div className="skills-div d-flex flex-column justify-content-center align-items-center">
              <img src={js}></img>
              <p className="my-2">JAVASCRIPT</p>
            </div>
          </Col>
          <Col lg={3} className="p-4">
          <div className="skills-div d-flex flex-column justify-content-center align-items-center ">
              <img src={react}></img>
              <p className="my-2">REACT</p>
            </div>
          </Col>
        </Slider>
      </Row>

      <Row className="pb-5 pt-5"> 
        <Col className="d-flex justify-content-center pb-5"><Button variant=" project-button">View More Skills</Button></Col>
      </Row>
    </Container>
  );
}

export default Skills;
