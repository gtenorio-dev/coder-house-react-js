import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import NavbarCategoryContainer from "./NavbarCategoryContainer";

const NavbarComp = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mx-5">
          QwertyShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="mx-4">
              Inicio
            </Nav.Link>
            <NavDropdown
              title="Category"
              className="mx-4"
              id="navbarScrollingDropdown"
            >
              {categories.map((c) => (
                <NavDropdown.Item as={Link} to={`/category/${c}`} key={c}>
                  {c}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {/* <Nav.Link href="#action4" className="mx-4">
              Ofertas
            </Nav.Link> */}
            <Nav.Link as={Link} to="/contact" className="mx-4">
              Contact
            </Nav.Link>
          </Nav>
          <CartWidget items={0} />
          <Button className="mx-2" variant="outline-primary" as={Link} to="/signin">
            Sign In
          </Button>
          <Button className="mx-2" variant="primary" as={Link} to="/signup">
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
