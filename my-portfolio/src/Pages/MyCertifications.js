import React from "react";
import CertificationHead from "../Components/CertificationHead";
import CertificateCard from "../Components/CertificateCard";
import CertificateData from "../Components/CertificateData";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Layout/Footer";
import Awards from "../Components/Awards";
import AwardsData from "../Components/AwardsData";
function MyCertifications() {
  return (
    <>
      <div>
        <CertificationHead />
      </div>

      <div>
        <p className="project-para pb-5 fs-2 pt-5">
          <span className="text-muted project-para fs-2">Delve into</span>{" "}
          <br />
          My Certified Proficiency
        </p>

        <Container>
          <Row>
            {CertificateData.map((row, index) => (
              <Col key={index} md={4} className="">
                <CertificateCard data={row} />
              </Col>
            ))}
          </Row>

          <Row>
            <div>
              <p className="project-para pb-5 fs-2 pt-5">
                <span className="text-muted project-para fs-2">Delve into</span>{" "}
                <br />
                My Certified Proficiency
              </p>
            </div>
            {AwardsData.map((row, index) => (
              <Col key={index} md={4} className="">
                <Awards data={row} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default MyCertifications;
