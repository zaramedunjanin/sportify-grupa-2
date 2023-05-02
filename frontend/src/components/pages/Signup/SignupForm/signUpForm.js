import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "../SignupForm/signUpForm.css";
import MainButton from "../../../atoms/Buttons/MainButton";

const SignUpForm = () => {
  return (
    <Container className="inputContainer">
      <Row className="inputBackground">
        <Col xs={6} className="pr-2">
          <input type="text" id="fname" name="fname" placeholder="First Name" />
        </Col>
        <Col xs={6} className="pl-2">
          <input
            className="closer"
            type="text"
            id="fname"
            name="fname"
            placeholder="Last Name"
          />
        </Col>

        <Col xs={12} className="mt-3 pt-1">
          <input
            className="longInput"
            type="text"
            id="fname"
            name="fname"
            placeholder="City"
          />
        </Col>
        <Col xs={12} className="mt-3 pt-1">
          <input
            className="longInput"
            type="text"
            id="fname"
            name="fname"
            placeholder="Phone Number"
          />
        </Col>
        <Col xs={12} className="mt-3 pt-1">
          <input
            className="longInput"
            type="text"
            id="fname"
            name="fname"
            placeholder="Username"
          />
        </Col>

        <Col xs={12} className="mt-3 pt-1">
          <input
            className="longInput"
            type="email"
            id="fname"
            name="fname"
            placeholder="Email"
          />
        </Col>

        <Col xs={12} className="mt-3 pt-1">
          <input
            className="longInput"
            type="password"
            id="fname"
            name="fname"
            placeholder="Password"
          />
        </Col>

        <Row style={{ paddingRight: "0" }}>
          <Col className="centerContainer mt-4">
            <MainButton text={"Sign Up"} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default SignUpForm;
