import React from "react";
import "../styles/about.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    const navigate = useNavigate();
  return (
    <>
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
</div>
    <section className="about-page">
      {/* Hero Section */}

      <div className="about-hero">
        <h1>About FinTrack</h1>
        <p>Your trusted partner in personal finance management.</p>
      </div>

      {/* Mission & Vision */}
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          At FinTrack, our mission is to empower individuals with smart tools to manage their finances effortlessly.  
          We strive to make budgeting, expense tracking, and financial planning <b>accessible, secure, and intelligent</b> for everyone.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a world where financial literacy is not a barrier but a stepping stone to success.  
          With AI-powered analytics and a user-friendly interface, we aim to help users make informed decisions about their <b>expenses, savings, and investments</b>.
        </p>
      </div>

      {/* Core Features Section */}
      <div className="features-section">
        <h2>Core Features</h2>
        <div className="features-grid">
          <div className="feature-card">✔️ Smart Expense Tracking</div>
          <div className="feature-card">✔️ AI-Powered Financial Insights</div>
          <div className="feature-card">✔️ Customizable Budget Goals</div>
          <div className="feature-card">✔️ Data Security & Privacy First</div>
          <div className="feature-card">✔️ Multi-Account Integration</div>
          <div className="feature-card">✔️ Visual Financial Analytics</div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose FinTrack?</h2>
        <p>
          Unlike traditional finance apps, FinTrack focuses on **user experience, powerful insights, and data security.
        </p>
        <ul>
          <li>🚀 User-Friendly Interface – Designed for simplicity & ease of use.</li>
          <li>🔒 Top-Notch Security – End-to-end encryption ensures data privacy.</li>
          <li>📊 AI-Based Reports – Get intelligent suggestions to improve finances.</li>
          <li>🌍 Access Anywhere – Use it on mobile, tablet, or desktop.</li>
        </ul>
      </div>

      
      {/* Call-to-Action */}
      <div className="cta-section">
        <h2>Take Control of Your Finances Today!</h2>
        <p>Join thousands of users who trust FinTrack for financial success.</p>
        <button>Get Started</button>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;
