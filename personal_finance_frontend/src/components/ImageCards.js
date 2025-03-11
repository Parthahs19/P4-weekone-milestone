import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/ImageCards.css"; 

const ImageCards = () => {
  const features = [
    {
      title: "Track Expenses",
      imgSrc: "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaWFsfGVufDB8fDB8fHww",
    },
    {
      title: "Smart Budgeting",
      imgSrc: "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?semt=ais_hybrid",
    },
    {
      title: "Grow Your Wealth",
      imgSrc: "https://cdn.crn.in/wp-content/uploads/2020/07/27131426/CRN-Finance-FinTech-Digital-Technology-696.jpg",
    },
  ];

  return (
    <Container className="image-cards-section">
      <Row className="justify-content-center">
      <h2 className="text-center mb-4">Features Of FinTrack</h2>
        {features.map((feature, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="image-card">
              <Card.Img variant="top" src={feature.imgSrc} className="image-card-img" />
              <Card.Body className="image-card-overlay">
                <Card.Title>{feature.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageCards;
