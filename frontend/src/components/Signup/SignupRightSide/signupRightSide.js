import React from "react";
import Logo from "../../Navbar/Logo";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "../SignupRightSide/signupRightSide.css";
import MainButton from "../../Buttons/MainButton";

const SignupRightSide = () => {
  return (
    <Container fluid className="background-green height">
      <Row>
        <Col xs={6}>
          <Logo />
        </Col>
      </Row>
      <Row className="p-0">
        <Col>
          <h3>Already have an account?</h3>
          <p>Log in and catch up with the latest events.</p>
          <div className="centerContainer">
            <MainButton text={"Log In"} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupRightSide;