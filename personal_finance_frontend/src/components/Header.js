import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/header.css"; // Ensure this is correctly linked

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand className="brand_name">💳 FinTrack_</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Navigation Links */}
          <Nav className="ms-auto me-auto nav-links">
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/features" className="nav-item">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

