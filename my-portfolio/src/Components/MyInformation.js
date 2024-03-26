import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function MyInformation() {
  return (
    <div className="information-part p-4 ">
      <Container>
        <Row className="align-items-center  justify-content-around">
          <div className="d-flex justify-content-center align-items-center text-center">
          <Col md={4}><i class=" font-icon fa-solid fa-location-dot"></i><h3>My Address</h3><p>Chandigarh, India</p></Col>
          <Col md={4}><i class=" font-icon fa-solid fa-envelope"></i><h3>Send me message</h3><p>lokeshtiwari212@gmail.com</p></Col>
          <Col md={4}><i class=" font-icon fa-solid fa-phone"></i><h3>Call me on</h3><p>+91 7248475238</p></Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MyInformation;
