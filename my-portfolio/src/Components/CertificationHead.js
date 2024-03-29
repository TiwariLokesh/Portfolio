import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../Stylings/Certifications.css'
function CertificationHead() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="certificate-para">
          <div className="pt-5 project-heading">
              My <span>Skills</span>
            </div>
            <p className="text-justify">My certifications represent dedication and expertise in my field, strengthening my skills with each earned credential.</p>
            <p className="text-justify">They stand as a testament to my commitment to excellence, validating my readiness to tackle diverse challenges.</p>
            <p className="text-justify">These certifications signify trust in my abilities, serving as a foundation for professional growth.</p>
            <p className="text-justify">Continual learning keeps me abreast of industry advancements, ensuring innovative solutions and exceeding expectations.</p>
          </Col>

          <Col md={6}>
          
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CertificationHead;
