import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MyInformation() {
  return (
    <div className="information-part p-4">
      <Container className="mx-auto">
        <Row>
          <Col md={4}>
            <i className=" font-icon fa-solid fa-location-dot mx-auto text-center"></i>
            <h3 className="pt-3 text-center">My Address</h3>
            <p className=" text-center data">Chandigarh, India</p>
          </Col>
          <Col md={4}>
            <i className=" font-icon fa-solid fa-envelope mx-auto"></i>
            <h3 className="pt-3 text-center">Send me message</h3>
            <p className=" text-center data"> lokeshtiwari212@gmail.com</p>
          </Col>
          <Col md={4}>
            <i className=" font-icon fa-solid fa-phone mx-auto"></i>
            <h3 className="pt-3 text-center">Call me on</h3>
          <p className="text-center data">+91 7248475238</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyInformation;
