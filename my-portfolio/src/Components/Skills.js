import React from "react";
import "../Stylings/Home.css";
import { Container, Row, Col } from "react-bootstrap";
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
    </Container>
  );
}

export default Skills;
