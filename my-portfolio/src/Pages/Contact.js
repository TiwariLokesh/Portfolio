import React from "react";
import ContactForm from "../Components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
function Contact() {
  return (
    <>
      <Container>
        <Row>
          <div className="text-center project-heading">
            Contact <span>us</span>
          </div>
          <p className="project-para pb-5">
          Get in Touch: Expertise at Your Service
          </p>
        </Row>
        <Row>
          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
