import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    
     <div>
      <Container>
        <div className="text-center project-heading">My <span>Projects</span></div>
        <p className="project-para pb-5">Explore some of my featured projects</p>
        <Row className="align-items-center">
          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card className="cards"style={{ width: "23rem", }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1060&t=st=1710667406~exp=1710668006~hmac=5cc28ee3a3f3dbe056a2ce35c33e2042045e2f1659029c4aead4457c0769bf1d" />
              <Card.Body>
                <p><span className="card-title">Tech Connect</span></p>
                <Card.Text className="card-content ">A Social Media app for developers by the developers. Geeks can post topics on new technologies and follow geeks with same interest.</Card.Text>
                <Button variant=" project-button">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card className="cards" style={{ width: "23rem" }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg" />
              <Card.Body>
              <p><span className="card-title">Crypto Tracker</span></p>
                <Card.Text>lorem ipsum</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card className="cards" style={{ width: "23rem" }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg" />
              <Card.Body>
              <p><span className="card-title">KK. Electric (Web)</span></p>
                <Card.Text>lorem ipsum</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
  );
}

export default Projects;
