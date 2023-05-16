import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "../SignupForm/signUpForm.css";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";

const SignUpForm = () => {
  return (
      <Container className="inputContainer">
        <Row className="inputBackground">
          <Col xs={6} className="pr-2">
            <input type="text" className="input" id="fname" name="fname" placeholder="First Name" />
          </Col>
          <Col xs={6} className="pl-2">
            <input
                className="input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Last Name"
            />
          </Col>


          <Col xs={12} className="mt-3 pt-1">
            <input
                className="input"
                type="text"
                id="fname"
                name="fname"
                placeholder="City"
            />
          </Col>
          <Col xs={12} className="mt-3 pt-1">
            <input
                className="input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Phone Number"
            />
          </Col>
          <Col xs={12} className="mt-3 pt-1">
            <input
                className="input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Username"
            />
          </Col>


          <Col xs={12} className="mt-3 pt-1">
            <input
                className="input"
                type="email"
                id="fname"
                name="fname"
                placeholder="Email"
            />
          </Col>

          <Col xs={12} className="mt-3 pt-1">
            <input
                className="input"
                type="password"
                id="fname"
                name="fname"
                placeholder="Password"
            />
          </Col>

          <Col xs={12} className="mt-3 pt-1">
            <select className="input"   id="fname" name="fname" placeholder="Role">
              <option  value=""  disabled selected hidden>Choose a role</option>
              <option value="1">Admin</option>
              <option value="2">Company</option>
              <option value="3">User</option>
            </select>
          </Col>

          <Row style={{ paddingRight: "0" }}>
            <Col className="centerContainer mt-4">
              <MainButton className= "form-button" text={"Sign Up"} />
            </Col>
          </Row>
        </Row>
      </Container>
  );
};

export default SignUpForm;
