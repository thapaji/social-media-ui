import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Logo } from "./Logo";
import { FaEnvelope, FaHome, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link icon-link" to="/">
              <FaHome className="icon" />
              <span className="link-label">Home</span>
            </Link>
            <Link className="nav-link icon-link" to="/shop">
              <FaShoppingBag className="icon" />
              <span className="link-label">Shop</span>
            </Link>
            {/* <Link className="nav-link icon-link">
              <FaPlus className="icon" style={{ color: "red" }} />
              <span className="link-label">Add</span>
            </Link> */}
            <Link className="nav-link icon-link" to="/messages">
              <FaEnvelope className="icon" />
              <span className="link-label">Messages</span>
            </Link>
            <Link className="nav-link icon-link" to="/me">
              <FaUser className="icon" />
              <span className="link-label">Me</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
