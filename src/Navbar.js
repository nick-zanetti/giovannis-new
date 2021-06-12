import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar fixed="top" className="mb-3" bg="light" variant="light" expand="lg">
      <Navbar.Brand>Giovanni's Restaurant</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/menu">Menu</Nav.Link>
        <Nav.Link href="/order">Order</Nav.Link>
        <Nav.Link href="/checkout">Checkout</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
