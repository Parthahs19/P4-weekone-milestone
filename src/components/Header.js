import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Header.css"

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand className="brand-name">💳 FinTrack</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            {/* Navigation Links */}
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/features" className="nav-item">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="nav-item">
              Pricing
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
