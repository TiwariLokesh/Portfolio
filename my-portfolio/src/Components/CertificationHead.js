import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../Stylings/Certifications.css'
import Certification from '../Images/Certification.png'
function CertificationHead() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="certificate-para pt-5 pb-5">
          <div className="pt-5 project-heading">
              My <span>CERTIFICATIONS</span>
            </div>
            <p className="text-justify">My certifications represent dedication and expertise in my field, strengthening my skills with each earned credential.</p>
            <p className="text-justify">They stand as a testament to my commitment to excellence, validating my readiness to tackle diverse challenges.</p>
            <p className="text-justify">These certifications signify trust in my abilities, serving as a foundation for professional growth.</p>
            <p className="text-justify">Continual learning keeps me abreast of industry advancements, ensuring innovative solutions and exceeding expectations.</p>
          </Col>

          <Col md={6} className="certificate-img">
          <img style={{width:"80%"}} src={Certification}></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CertificationHead;
