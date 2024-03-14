import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../Layout/Statusbar.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow py-3 px-5">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" active className="mx-3">Home</Nav.Link>
            <Nav.Link href="#action2" className="mx-3">My Projects</Nav.Link>
            <Nav.Link href="#action2" className="mx-3">My Blogs</Nav.Link>
            <Nav.Link href="#action2" className="mx-3">My Workshop</Nav.Link>
           
          </Nav>

          <Button variant=" button-color px-5">Contact</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
