import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../Layout/footer.css'
import { Routes, Route, Link } from 'react-router-dom';
import MyCertifications from '../Pages/MyCertifications';
import MyBlogs from '../Pages/MyBlogs';
import Contact from '../Pages/Contact';
import MyWorkshop from '../Pages/MyWorkshop';

export const Footer = () => {
  return (
    <footer className="shadow py-5 foot">
      <Container>
        <Row className='d-flex justify-content-center align-items-center gap-4'>
          <Col sm={12} className='d-flex justify-content-center align-items-center text-center'>
          <h2 className='fs-2 fw-normal'>Stay up to date and Reach out for <br/>inquiries or collaborations!</h2>
          </Col>
          <Col md={5}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='py-3 rounded-5 pr-5' // Add padding to the right to make space for the button
        />
        <Button variant="" className='rounded-5 position-absolute end-0' style={{top: '13%', transform: 'translateY(-50%)',transform:"translateX(-10%)",padding:"9px 22px",backgroundColor:"#ca0018",color:"#fff"}}>Subscribe</Button>
      </InputGroup>
    </Col>
    <Col md={12} className='d-flex justify-content-center align-items-center gap-5'>
    <Link to="/mycertifications" className="nav-link">Certifications</Link>
                  <Link to="/myblogs" className="nav-link"> Blogs</Link>
                  <Link to="/myworkshop" className="nav-link"> Workshop</Link>
                  <Link to="/contact" className="nav-link"> Contact</Link>
    </Col>
        </Row>
      </Container>

      <Routes>
        
        <Route path='/mycertifications' element={<MyCertifications/>}/>
        <Route path='/myblogs' element={<MyBlogs/>}/>
        <Route path='/myworkshop' element={<MyWorkshop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </footer>

    
  );
};

export default Footer;