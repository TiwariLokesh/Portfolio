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
    //Footer
    <footer className="shadow foot">
      <Container>
        <Row className='d-flex justify-content-center align-items-center gap-4 py-5'>
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
        <Button variant="" className='rounded-5 position-absolute end-0' style={{top: '13%', transform: 'translateY(-50%)',transform:"translateX(-10%)",padding:"9px 22px",backgroundColor:"#ca0018",color:"#fff", zIndex:"99"}}>Subscribe</Button>
      </InputGroup>
    </Col>
    <Col md={12} className='d-flex justify-content-center align-items-center gap-5'>
    <Link to="/mycertifications" className="nav-link">Certifications</Link>
                  <Link to="/myblogs" className="nav-link"> Blogs</Link>
                  <Link to="/myworkshop" className="nav-link"> Workshop</Link>
                  <Link to="/contact" className="nav-link"> Contact</Link>
    </Col>
    <Col md={12} className='d-flex justify-content-center align-items-center gap-4 py-2'>
           <a href="https://www.linkedin.com/in/lokesh-tiwari-ab7391253/" target="_blank">
                <i className="iccon fa-brands fa-linkedin"></i>
              </a>

              <a href="https://github.com/TiwariLokesh?tab=overview&from=2024-03-01&to=2024-03-14" target="_blank">
                <i className="iccon fab fa-github"></i>
              </a>

              <a href="https://www.instagram.com/lokeshtiwari212/" target="_blank">
                <i className="iccon fa-brands fa-instagram"></i>
              </a>

              <a href="https://wa.me/+917248475238" target="_blank">
              <i class="iccon fa-brands fa-whatsapp"></i>
              </a>
    </Col>

    <Col md={12}>
    <p className='nav-logo' >Lokesh <span className='nav-logo'> Tiwari </span></p>
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