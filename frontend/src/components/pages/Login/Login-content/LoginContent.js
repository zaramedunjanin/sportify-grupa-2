import React from "react";
import { Col, Row } from "react-bootstrap";
import LoginForm from "../Login Form/LoginForm";
import Container from "react-bootstrap/Container";
import "./LoginContent.scss";
import Button from "../../../atoms/Buttons/MainButton/MainButton";
import Navbar from "../Navbar-login/Navbar-login";

import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const navigate = useNavigate();
  return (
      <>
        <Container fluid className={"container"}>
          <Row>
            <Col sm={5}>
              <Navbar />
              <div className="bg-lightgreen left-side">
                <h3 className="login-h">Don't have an account?</h3>
                <p>Join with the peeeeepz</p>
                <Button  text={"Sign up"} onClick={() => navigate("/signup")} />
              </div>
            </Col>
            <Col className="right-side d-flex justify-content-center " sm={7}>
              <div>
                <h2 className="display-8">Welcome back!</h2>
                <LoginForm />
              </div>
            </Col>
          </Row>
        </Container>
      </>
  );
};

export default LoginContent;