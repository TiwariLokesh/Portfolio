import React from "react";
import { Container, Row } from "react-bootstrap";

function Experience() {
  return (
    <Container className="pb-5 experience">
      <Row className="pb-5">
        <div className="text-center project-heading">
          My <span>Experience</span>
        </div>
        <p className="project-para pb-5">
          Browse through my extensive industry experience.
        </p>
      </Row>

      <Row className="justify-content-center align align-items-center pb-5">
        <div className="box dabba d-flex justify-content-center align-items-center">
          <ul>
            <li>
              <h3 className="heading">
                <span>Full Stack Developer</span>
              </h3>
              <p className="fw-bold text-dark fs-6">Godigitify Nexus</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                excepturi accusamus minus totam{" "}
              </p>
              <a href="https://www.godigitify.com/" target="_blank">More Information</a>
              <span className="date">January 2023</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="heading">
                <span>Trainer</span>
              </h3>
              <p className="fw-bold text-dark fs-6">Techlearns Academy</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                excepturi accusamus minus totam{" "}
              </p>
              <a href="#">Read More ></a>
              <span className="date">February 2021</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default Experience;
