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
            <Card.Img variant="top" src={props.data.image} />
            <Card.Body>
              <Card.Title>{props.data.title}</Card.Title>
              <Card.Text>
                {props.data.disc}
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
