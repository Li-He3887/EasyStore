import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Navigation() {
  return (
    <Navbar collapseOnSelect className="justify-content-start bg-#1d4aa3" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img
                alt=""
                src='/easystore-logo-horizontal-white.png'
                width= "auto"
                height= "50"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
            <NavDropdown title="Product" id="navbarScrollingDropdown"></NavDropdown>
            <Nav.Link href="#">Pricing</Nav.Link>
            <NavDropdown title="Solution" id="navbarScrollingDropdown"></NavDropdown>
            <NavDropdown title="Resource" id="navbarScrollingDropdown"></NavDropdown>
            <Nav.Link href="#">Our Customers</Nav.Link>
            <Nav.Link href="#">Log in</Nav.Link>
            <Button size="sm" variant="outline-light" >Get Start</Button>
            <img src="/my.png" height="25px" width="25px" className="ps-2 pt-2" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;