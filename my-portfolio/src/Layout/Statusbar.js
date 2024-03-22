import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Layout/Statusbar.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import MyProject from '../Pages/MyProject';
import MyBlogs from '../Pages/MyBlogs';
import MyWorkshop from '../Pages/MyWorkshop';
import Contact from '../Pages/Contact';

function Statusbar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} className="mb-3 px-3">
          <Container fluid>
            <Link className='nav-link' to="/"> <p className='nav-logo' >Lokesh <span className='nav-logo'> Tiwari </span></p></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="nav-link">HOME</Link>
                  <Link to="/myproject" className="nav-link">MY PROJECTS</Link>
                  <Link to="/myblogs" className="nav-link">MY BLOGS</Link>
                  <Link to="/myworkshop" className="nav-link">MY WORKSHOP</Link>
                </Nav>
                {/* Style the button using inline styles */}
                <Link to="/contact"><Button className="my-2" variant=" button-color">Contact Us</Button></Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/myproject' element={<MyProject/>}/>
        <Route path='/myblogs' element={<MyBlogs/>}/>
        <Route path='/myworkshop' element={<MyWorkshop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default Statusbar;
