import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects(props) {
  return (
    <Container>
      <Row className="special">My Projects</Row>
      <Row className="align-items-center"> 
        <Col lg={4} md={6}>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
