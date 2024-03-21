import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Layout/Statusbar.css'

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
                <Nav.Link href="#action1" active>HOME</Nav.Link>
           <Nav.Link href="#action2">MY PROJECTS</Nav.Link>
           <Nav.Link href="#action2">MY BLOGS</Nav.Link>
            <Nav.Link href="#action2">MY WORKSHOP</Nav.Link>
                  </Nav>
                  <Button variant=" button-color my-1">Contact</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Statusbar;