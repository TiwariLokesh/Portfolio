// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import '../Layout/Statusbar.css'

// function NavScrollExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary shadow py-3 px-5">
//       <Container fluid>
//         <Navbar.Brand href="#"></Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="m-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1" active className="mx-3">Home</Nav.Link>
//             <Nav.Link href="#action2" className="mx-3">My Projects</Nav.Link>
//             <Nav.Link href="#action2" className="mx-3">My Blogs</Nav.Link>
//             <Nav.Link href="#action2" className="mx-3">My Workshop</Nav.Link>
           
//           </Nav>

//           <Button variant=" button-color px-5">Contact</Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Statusbar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} className="mb-3 px-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" active>Home</Nav.Link>
           <Nav.Link href="#action2">My Projects</Nav.Link>
           <Nav.Link href="#action2">My Blogs</Nav.Link>
            <Nav.Link href="#action2">My Workshop</Nav.Link>
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