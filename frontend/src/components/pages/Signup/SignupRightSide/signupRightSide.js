import React from "react";
import Logo from "../../../organisms/Navbar/Logo";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "./signupRightSide.css";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";

import { useNavigate } from "react-router-dom";

const SignupRightSide = () => {
  const navigate = useNavigate();
  return (
    <Container className="background-green height">
      <Row>
        <Col xs={6}>
          <Logo />
        </Col>
      </Row>
      <Row className="p-0">
        <Col className="text_in_the_center">
          <h3 className="h3_center">Already have an account?</h3>
          <p className="p_center">
            Log in and catch up with the latest events.
          </p>
          <div className="centerContainer">
            <MainButton text={"Log In"} onClick={() => navigate("/login")} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupRightSide;
