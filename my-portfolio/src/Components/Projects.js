import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    
     <div>
      <Container>
        <div className="text-center project-heading">My <span>Projects</span></div>
        <p></p>
        <Row className="align-items-center">
          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card style={{ width: "23rem", height:"fit-content" }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>lorem ipsum</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>lorem ipsum</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="d-flex justify-content-center align-content-center">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
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
