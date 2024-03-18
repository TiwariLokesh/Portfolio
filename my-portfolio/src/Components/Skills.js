import React from 'react'
import '../Stylings/Home.css'
import { Container, Row, Col } from 'react-bootstrap'
function Skills() {
  return (
   <Container>
      <Row className="pb-5">
        <div className="text-center project-heading">
          My <span>Skills</span>
        </div>
        <p className="project-para pb-5">
          Browse through my extensive industry experience.
        </p>
      </Row>
   </Container>
  )
}

export default Skills