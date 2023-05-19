import { Form } from "react-bootstrap"
import Button from "../../../atoms/Buttons/MainButton/MainButton"
import React from "react";
import "./LoginForm.scss"

const LoginForm = () => {
    return (
        <>
            <Form className="p-4 form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" className=" input " />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" className="input " />
                </Form.Group>
                <Button text={"Log in"} className="login-button" />
            </Form>
        </>
    )
}

export default LoginForm