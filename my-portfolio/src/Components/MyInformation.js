import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Stylings/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyInformation() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="information-part p-4">
      <Container className="mx-auto">
        <Row>
          <Col md={4} className="contact-col">
            <i className=" infoicon font-icon fa-solid fa-location-dot mx-auto text-center hover:rotate-y-180"></i>
            <h3 className="pt-3 text-center">My Address</h3>
            <p className=" text-center data">Chandigarh, India</p>
          </Col>
          <Col md={4} className="contact-col">
            <i className=" infoicon font-icon fa-solid fa-envelope mx-auto"></i>
            <h3 className="pt-3 text-center">Send me message</h3>
            <p className=" text-center data"> lokeshtiwari212@gmail.com</p>
          </Col>
          <Col md={4} className="contact-col">
            <i className=" infoicon font-icon fa-solid fa-phone mx-auto"></i>
            <h3 className="pt-3 text-center">Call me on</h3>
            <p className="text-center data">+91 7248475238</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyInformation;
