import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <div className="footer1">
        <Container>
          <Row className="text-center">
            <Col>
              <p>📩 Contact Us: support@fintrack.com | ☎ +91 98765 43210</p>
              <p>© 2025 FinTrack. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
  </>
  );
};

export default Footer;
