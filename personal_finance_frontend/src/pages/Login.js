import React, { useState, useContext } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../utils/apiRequest";
import "../styles/login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // ✅ Basic email validation

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Extract email and password from values
    const { email, password } = values;
  
    // Validate email before making request
    if (!validateEmail(email)) return setError("Invalid email format!");
    if (!password) return setError("Password is required!");
  
    try {
      // Call loginAPI with correct parameters
      const data = await loginAPI(email, password);
      
      login(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err); // Debugging
      
      // ✅ Ensure error is a string before setting state
      setError(typeof err === "string" ? err : "Login failed. Please try again.");
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className="modern-btn">Login</Button>
            </Form>

            <div className="signup-section">
              <small>
                Don't have an account?{" "}
                <a href="/signup" className="signup-link">Sign up</a>
              </small>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
