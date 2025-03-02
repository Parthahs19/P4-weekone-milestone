import React, { useState, useContext } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Hardcoded credentials for testing
  const validUser = {
    email: "test@example.com",
    password: "password123",
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Basic email validation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(values.email)) {
      setError("Invalid email format!");
      return;
    }

    if (values.email === validUser.email && values.password === validUser.password) {
      login({ email: values.email });
      localStorage.setItem("user", JSON.stringify({ email: values.email }));
      navigate("/Dashboard");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <>
      <div className="navbar-container"><Header /></div>
      
      <Container className="login-container">
        <Card className="login-box">
          <Card.Body>
            <h2 className="login-title">Welcome Back</h2>
            {error && <Alert variant="danger" className="alert">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
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
                Login
              </Button>
            </Form>

            <div className="signup-section">
              <small>
                Don't have an account?{" "}
                <a href="/signup" className="signup-link">
                  Sign up
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

export default Login;
