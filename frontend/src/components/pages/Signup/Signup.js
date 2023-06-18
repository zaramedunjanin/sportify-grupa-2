import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUpForm from "./SignupForm/signUpForm";
import SignupRightSide from "./SignupRightSide/signupRightSide";

import "../Signup/Signup.css";
import useEffectTitle from "../../../hooks/useEffectTitle";

const Signup = () => {
  useEffectTitle("Signup | Sportify");
  return (
    <Container fluid>
      <div className="flexWrapReverse flexWidth">
        <Row>
          <Col xs={12} sm={7} className="p-0 firstCol">
            <SignUpForm />
          </Col>
          <Col xs={12} sm={5} className="p-0">
            <SignupRightSide />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Signup;
