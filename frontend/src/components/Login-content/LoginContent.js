import React from "react";
import { Col,  Row } from "react-bootstrap"
import LoginForm from "../Login Form/LoginForm"
import Container from "react-bootstrap/Container";
import "./LoginContent.scss"
import Button from "../Buttons/MainButton"
import Navbar from "../Navbar-login/Navbar-login";

const LoginContent = () =>{
    return(
        <>
            <Container fluid className={"container"}>
                <Row>
                    <Col  sm={5}>
                            <Navbar />
                        <div className="bg-lightgreen left-side" >
                            <h2 className="display-">Don't have an account?</h2>
                            <p>Join with the peeeeepz</p>
                            <Button text={"Sign up"}/>
                        </div>
                    </Col>
                    <Col className="right-side d-flex justify-content-center " sm={7}>
                        <div>
                          <h2 className="display-8">Welcome back!</h2>
                          <LoginForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginContent