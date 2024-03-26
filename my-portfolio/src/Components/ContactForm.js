import React, { useState } from 'react';
import { Form, Button, Container,Row, Col } from 'react-bootstrap';
import '../Stylings/Contact.css'; // Import CSS for custom styling

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container className='contact-form-container shadow'>
      <Form onSubmit={handleSubmit}>
        
          <Row>
            <Col md={12}>
        <Form.Group controlId="formName">
          <Form.Label className='fw-medium'>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        </Col>

        <Col md={12}>
        <Form.Group controlId="formEmail">
          <Form.Label className='pt-3 fw-medium'>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        </Col>

        <Col md={12}>
        <Form.Group controlId="formAddress">
          <Form.Label className='pt-3 fw-medium'>Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        </Col>

        <Col md={12}>
        <Form.Group controlId="formCity">
          <Form.Label className='pt-3 fw-medium'>City</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your city" 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        </Col>

        <Col md={12}>
        <Form.Group controlId="formState">
          <Form.Label className='pt-3 fw-medium'>State</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your state" 
            name="state" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        </Col>
      
        <Col md={12}>
        <Button className="submit-button button-color" variant="" type="submit">
          Submit
        </Button>
        </Col>
        </Row>
        
      </Form>
      </Container>
  );
}

export default ContactForm;

// import { Container } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function GridBasicExample() {
//   return (
    
//     <Form>
//       <Container>
//       <Row>
//         <Col md={12}>
//         <Form.Label className='pt-3 fw-medium'>Name</Form.Label>
//           <Form.Control placeholder="Enter your name" type='text'  name="name" onChange={handleChange} required/>
//         </Col>

//         <Col>
//         <Form.Label className='pt-3 fw-medium'>Email</Form.Label>
//           <Form.Control placeholder="Enter your name"type='email'  name="email" onChange={handleChange} required />
//         </Col>

//         <Col>
//         <Form.Label className='pt-3 fw-medium'>Address</Form.Label>
//           <Form.Control placeholder="Enter your address"type='text'  name="address" onChange={handleChange} required />
//         </Col>

//         <Col>
//         <Form.Label className='pt-3 fw-medium'>City</Form.Label>
//           <Form.Control placeholder="Last name"type='email'  name="email" onChange={handleChange} required />
//         </Col>
//       </Row>
//       </Container>
//     </Form>
//   );
// }

// export default GridBasicExample;
