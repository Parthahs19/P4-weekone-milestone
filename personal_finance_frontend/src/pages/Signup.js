import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import "../styles/signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(values.email)) {
      setError("Invalid email format!");
      return;
    }

    try {
      const {data} = await axios.post("http://localhost:5000/api/auth/register", values);
    
      if (data.success) {
        setSuccess("Signup Successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        console.log("❌ Backend responded with an error:", data.message);
        setError(data.message);
      }
    } catch (err) {
      console.error("❌ Axios error:", err);
      console.error("❌ Full error response:", err.response);
      console.error("❌ Status Code:", err.response?.status);
      console.error("❌ Error Data:", err.response?.data);
    
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
    
    
  };

  return (
    <>
      <div className="navbar-container"><Header /></div>

      <Container className="signup-container">
        <Card className="signup-box">
          <Card.Body>
            <h2 className="signup-title">Create Your Account</h2>
            {error && <Alert variant="danger" className="alert">{error}</Alert>}
            {success && <Alert variant="success" className="alert">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="form-group">
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </Form.Group>

              <Button type="submit" className="modern-btn">
                Signup
              </Button>
            </Form>

            <div className="signup-section">
              <small>
                Already have an account?{" "}
                <a href="/login" className="signup-link">
                  Login here
                </a>
              </small>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
