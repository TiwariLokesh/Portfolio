import React from "react";
import "../Stylings/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import html from "../Images/html.png";
import css from '../Images/css.png';
function Skills() {
  return (
    <Container className="pt-5 pb-5">
      <Row className="pb-5">
        <div className="text-center project-heading">
          My <span>Skills</span>
        </div>
        <p className="project-para pb-5">
          Skills and Stacks Expertise Developed .
        </p>
      </Row>

      <Row>
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
            <img src={html}></img>
            <p className="my-2">HTML</p>
          </div>
        </Col>
        <Col lg={3} className="p-4">
        <div className="skills-div d-flex flex-column justify-content-center align-items-center">
            <img src={html}></img>
            <p className="my-2">HTML</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
