import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Card} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCards from "../components/ImageCards";
import "../styles/home.css";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/*header section*/}
      <div className="navbar-container">
  <Header />
  <div className="nav-buttons">
  <Button className="nav-btn login-btn" onClick={() => navigate("/login")}>
    Login
  </Button>
  <Button className="nav-btn signup-btn" onClick={() => navigate("/signup")}>
    Sign Up
  </Button>
</div>
</div>

      
      {/* Hero Section */}
      <Container fluid className="hero-section">
        <Row className="text-center">
          <Col>
            <h1 className="hero-title">Take Control of Your Finances</h1>
            <p className="hero-subtitle">
              Manage your budget, track spending, and plan for the future
              effortlessly.
            </p>
            <Button className="hero-button" onClick={() => navigate("/signup")}>
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
      
      {/* image card */}
      <div class="imageCard">
        <ImageCards/>
      </div>

      {/* Features Section */}
      <div className="features-container">
  <div className="features-box">
    <h2 className="features-title">Why Choose FinTrack?</h2>
    <p className="features-desc">✔ AI-driven insights for better decision-making</p>
    <p className="features-desc">✔ Secure and private financial tracking</p>
    <p className="features-desc">✔ User-friendly interface with rich analytics</p>
    <button className="features-button" onClick={() => navigate("/signup")}>
      Join Now
    </button>
  </div>
</div>



      {/* Testimonials Section */}
      <Container className="testimonials-section">
        <h2 className="text-center">What Our Users Say</h2>
        <Row>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <p>
                  🚀 "This app changed my financial life! Highly recommended."
                </p>
                <h6>- Rahul, Startup Founder</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <p>💰 "Managing my expenses has never been easier!"</p>
                <h6>- Priya, Freelance Designer</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <p>📊 "Great insights and reports! Helped me save more!"</p>
                <h6>- Ankit, Software Engineer</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      < Footer/>
   </div>
  );
};

export default Home;
