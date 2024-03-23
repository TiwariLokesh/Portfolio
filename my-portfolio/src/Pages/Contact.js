import React from 'react'
import ContactForm from '../Components/ContactForm'
import {Container ,Row,Col} from 'react-bootstrap'
function Contact() {
  return (
   <>
   <Container>
    <Row>
      <h2 className='text-center'>Contact Us</h2>
    </Row>
<Row>
  <Col md={6}>
  <ContactForm/>
  </Col>
</Row>
   </Container>
   
   </>
  )
}

export default Contact