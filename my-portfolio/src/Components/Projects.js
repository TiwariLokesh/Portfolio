import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";


function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (

    <div>
      <Container>
        <div className="text-center project-heading">My <span>Projects</span></div>
        <p className="project-para pb-5">Explore some of my featured projects</p>
        <Row className="align-items-center">
          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className="cards" style={{ width: "23rem", }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1060&t=st=1710667406~exp=1710668006~hmac=5cc28ee3a3f3dbe056a2ce35c33e2042045e2f1659029c4aead4457c0769bf1d" />
              <Card.Body>
                <p><span className="card-title">Tech Connect</span></p>
                <Card.Text className="card-content ">A Social Media app for developers by the developers. Geeks can post topics on new technologies and follow geeks with same interest.</Card.Text>
                <a href="https://techconnect-3rcr.onrender.com/" target="_blank"> <Button variant=" project-button">See Project</Button></a>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className="cards" style={{ width: "23rem" }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/flat-design-cryptocurrency-concept_23-2149166905.jpg?t=st=1710667900~exp=1710671500~hmac=b677978eb5e353c3c16024317cc63ba13ebe73af276bc5d526918c04401791a8&w=1060" />
              <Card.Body>
                <p><span className="card-title">Crypto Tracker</span></p>
                <Card.Text className="card-content ">Dynamic cryptocurrency tracking website. Stay updated on market trends, analyze real-time data, and efficiently manage your digital assets online.</Card.Text>
                <a href="https://tiwarilokesh.github.io/Crypto-Tracker/" target="_blank"><Button variant=" project-button">See Project</Button></a>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className="cards" style={{ width: "23rem" }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/people-creating-social-media-landing-page_52683-38062.jpg?t=st=1710668641~exp=1710672241~hmac=97f7dd62f877d6eed05aa5f43ebb6372aaed3523cb052d552a89abc76e940cd7&w=1060" />
              <Card.Body>
                <p><span className="card-title">KK. Electric (Web)</span></p>
                <Card.Text className="card-content ">Presenting K.K. Electric & Tool House's dynamic website, showcasing products and expertise. Elevate your online presence with us!</Card.Text>
                <a href="https://kkelectricindia.com/" target="_blank"><Button variant=" project-button">See Project</Button></a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
