import React from "react";
import "../styles/features.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaShieldAlt, FaMobileAlt, FaChartPie, FaWallet, FaMoneyBillWave, FaSync, FaLightbulb, FaFilter, FaAdjust, FaSearchDollar, FaBell, FaFileInvoiceDollar } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
    { icon: <FaChartPie />, title: "Expense Tracking", desc: "Monitor daily expenses with categorized insights." },
    { icon: <FaWallet />, title: "Income Management", desc: "Keep track of earnings and savings easily." },
    { icon: <FaMoneyBillWave />, title: "Smart Budgeting", desc: "Set spending limits and track your financial goals." },
    { icon: <FaSync />, title: "Multi-Account Syncing", desc: "Securely connect multiple bank accounts." },
    { icon: <FaLightbulb />, title: "AI-Powered Insights", desc: "Get smart money-saving suggestions." },
    { icon: <FaFilter />, title: "Custom Filters & Search", desc: "Find transactions quickly with advanced filters." },
    { icon: <FaAdjust />, title: "Dark Mode & Themes", desc: "Personalize your experience with themes." },
    { icon: <FaSearchDollar />, title: "Visual Analytics", desc: "Interactive charts & reports for better insights." },
    { icon: <FaBell />, title: "Spending Alerts", desc: "Get notified when you exceed budget limits." },
    { icon: <FaFileInvoiceDollar />, title: "Bill Reminders", desc: "Never miss a due date with automated bill tracking." },
    { icon: <FaShieldAlt />, title: "Advanced Security", desc: "Data encryption & multi-layer authentication." },
    { icon: <FaMobileAlt />, title: "Cross-Platform Support", desc: "Access FinTrack on mobile, tablet & desktop." }
  ];
  
  

const Features = () => {
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

    <section className="features_section">
      <h2 className="features-title">Why Choose FinTrack?</h2>
      <p className="features-subtitle">Your all-in-one personal finance manager</p>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Features;
