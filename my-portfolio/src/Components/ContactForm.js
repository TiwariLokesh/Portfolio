import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
    <div className="contact-form-container shadow ">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className='pt-4'>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label  className='pt-4'>Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label  className='pt-4'>City</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your city" 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formState">
          <Form.Label  className='pt-4'>State</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your state" 
            name="state" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Button className="submit-button button-color" variant="" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
