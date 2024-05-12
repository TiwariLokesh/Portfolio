import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon from react-icons/fa
import '../Layout/Statusbar.css';
import Home from '../Pages/Home';
import MyBlogs from '../Pages/MyBlogs';
import MyWorkshop from '../Pages/MyWorkshop';
import Contact from '../Pages/Contact';
import MyCertifications from '../Pages/MyCertifications';

function Statusbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control the Offcanvas visibility
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  // Function to close the Offcanvas
  const handleClose = () => {
    setShowOffcanvas(false);
  };

  // Function to handle navigation to the Contact page
  const handleContactClick = () => {
    handleClose(); // Close Offcanvas
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} className="px-3">
          <Container fluid>
            <Link className='nav-link' to="/"> <p className='nav-logo' >Lokesh <span className='nav-logo'> Tiwari </span></p></Link>
            <Navbar.Toggle 
              aria-controls={`offcanvasNavbar-expand-${expand}`} 
              className="custom-toggler"
              onClick={() => setShowOffcanvas(!showOffcanvas)} // Toggle Offcanvas visibility on click
            >
              <FaBars  style={{height:"36px",width:"auto"}}/> {/* Replace the default hamburger icon with the custom icon */}
            </Navbar.Toggle>
            <Navbar.Offcanvas
              show={showOffcanvas} // Control the visibility of the Offcanvas
              onHide={handleClose} // Call handleClose function when Offcanvas is closed
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
                  <Link 
                    to="/" 
                    className="nav-link"
                    onClick={() => {
                      handleClose(); // Close Offcanvas on link click
                      navigate('/'); // Navigate to the specified link
                    }}
                  >
                    HOME
                  </Link>
                  <Link 
                    to="/mycertifications" 
                    className="nav-link"
                    onClick={() => {
                      handleClose(); // Close Offcanvas on link click
                      navigate('/mycertifications'); // Navigate to the specified link
                    }}
                  >
                    MY CERTIFICATIONS
                  </Link>
                  <Link 
                    to="/myblogs" 
                    className="nav-link"
                    onClick={() => {
                      handleClose(); // Close Offcanvas on link click
                      navigate('/myblogs'); // Navigate to the specified link
                    }}
                  >
                    MY BLOGS
                  </Link>
                  <Link 
                    to="/myworkshop" 
                    className="nav-link"
                    onClick={() => {
                      handleClose(); // Close Offcanvas on link click
                      navigate('/myworkshop'); // Navigate to the specified link
                    }}
                  >
                    MY WORKSHOP
                  </Link>
                </Nav>
             
                <Button 
                  className="my-2" 
                  variant=" button-color" 
                  onClick={handleContactClick} // Call handleContactClick function on button click
                >
                  Contact Us
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mycertifications' element={<MyCertifications/>}/>
        <Route path='/myblogs' element={<MyBlogs/>}/>
        <Route path='/myworkshop' element={<MyWorkshop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default Statusbar;
