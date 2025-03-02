import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Signup = () => {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Basic email validation
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
      const { data } = await axios.post("/api/signup", values);
      if (data.success) {
        setSuccess("Signup Successful! Please Login.");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
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
                <Form.Label className="form-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
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
      <Footer/>
    </>
  );
};

export default Signup;

