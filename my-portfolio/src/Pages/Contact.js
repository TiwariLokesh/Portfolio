import React from "react";
import ContactForm from "../Components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import FormImg from "../Images/FormImg.png";
import MyInformation from "../Components/MyInformation";
import Footer from "../Layout/Footer";

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
          <Col lg={6}>
            <ContactForm />
          </Col>

          <Col lg={6}>
            <img data-aos="zoom-in-left"
              style={{ width: "90%", margin: "20px 0px" }}
              src={FormImg}
              alt="Form"
            />
          </Col>
        </Row>
      </Container>

      <MyInformation></MyInformation>
      <div className="pt-5">
        <Footer />
      </div>

    </>
  );
}

export default Contact;
