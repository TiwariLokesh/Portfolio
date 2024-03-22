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

function Statusbar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} className="mb-3 px-3">
          <Container fluid>
            <Navbar.Brand href="#"> <p  className='nav-logo'>Lokesh <span  className='nav-logo' > Tiwari </span></p></Navbar.Brand>
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
                <Link to="/">HOME</Link>
           <Link to="/myproject">MY PROJECTS</Link>
           <Link to="/myblogs">MY BLOGS</Link>
           <Link to="/myworkshop">MY WORKSHOP</Link>
                  </Nav>
                  <Button variant=" button-color my-1">Contact</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/myproject' element={<MyProject/>}/>
        <Route path='/myblogs' element={<MyBlogs/>}/>
      </Routes>
    </>
  );
}

export default Statusbar;