import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../Stylings/Certifications.css'
import Certificate from '../Images/Certificate/certificate.jpg'


function CertificationHead() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="certificate-para  " style={{marginTop:"50px"}}>
            <div className="pt-5 project-heading p-1 cert">
              My <span>CERTIFICATIONS</span>
            </div>
            <p className="text-justify">
              <i className="fa-solid fa-greater-than p-2 pt-4" style={{ color: "#ca0018" }}></i> My certifications represent dedication and expertise in my field, strengthening my skills with each earned credential.
            </p>
            <p className="text-justify">
              <i className="fa-solid fa-greater-than p-2 pt-2" style={{ color: "#ca0018" }}></i> They stand as a testament to my commitment to excellence, validating my readiness to tackle diverse challenges.
            </p>
            <p className="text-justify">
              <i className="fa-solid fa-greater-than p-2 pt-2" style={{ color: "#ca0018" }}></i> These certifications signify trust in my abilities, serving as a foundation for professional growth.
            </p>
            <p className="text-justify">
              <i className="fa-solid fa-greater-than p-2 pt-2" style={{ color: "#ca0018" }}></i> Continual learning keeps me abreast of industry advancements, ensuring innovative solutions and exceeding expectations.
            </p>
          </Col>

          <Col md={6} className="certificate-img d-flex align-items-center justify-content-center">
            <img src={Certificate} style={{ maxWidth: "100%", height: "auto" }} alt="Certification" />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default CertificationHead;
