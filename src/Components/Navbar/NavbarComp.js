import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import NavbarCategoryListContainer from "./NavbarCategoryListContainer";

const NavbarComp = () => {
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

                        <NavbarCategoryListContainer />
                        <Nav.Link as={Link} to="/contact" className="mx-4">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <div className="text-end">

                    <CartWidget />  
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
