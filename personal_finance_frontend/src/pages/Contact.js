import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/contact.css";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Header Section */}
      <div className="home-page">
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
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">We'd love to hear from you! Contact us anytime.</p>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <h2>Contact Information</h2>
            <p>Reach out to us through any of the following channels:</p>
            <ul className="contact-list">
              <li><FaMapMarkerAlt className="icon" /> MG Road, Bangalore, India</li>
              <li><FaPhone className="icon" /> +91 98765 43210</li>
              <li><FaEnvelope className="icon" /> support@fintrack.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31190.803070662146!2d77.5945625434939!3d12.971598684336308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c41f0e99%3A0x13a5e2d4e018e2a3!2sMG%20Road%2C%20Bangalore%2C%20India!5e0!3m2!1sen!2sin!4v1618259169144"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
