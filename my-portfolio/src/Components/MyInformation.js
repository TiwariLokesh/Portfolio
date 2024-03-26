import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function MyInformation() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}><i class="fa-solid fa-location-dot"></i></Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyInformation;
