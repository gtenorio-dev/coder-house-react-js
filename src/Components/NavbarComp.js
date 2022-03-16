import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">QwertyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" className="mx-4">
              Inicio
            </Nav.Link>
            <NavDropdown
              title="Productos"
              className="mx-4"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action2">Producto 1</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Producto 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action4" className="mx-4">
              Ofertas
            </Nav.Link>
            <Nav.Link href="#action5" className="mx-4">
              Contacto
            </Nav.Link>
          </Nav>
          <Button className="mx-2" variant="outline-primary">
            Ingresar
          </Button>
          <Button className="mx-2" variant="primary">
            Registrarse
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
