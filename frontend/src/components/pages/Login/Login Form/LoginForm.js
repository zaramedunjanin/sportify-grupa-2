import React from 'react';
import { Form } from 'react-bootstrap';
import Button from '../../../atoms/Buttons/MainButton/MainButton';
import './LoginForm.scss';
import useLoginForm from '../../../../hooks/useLogin';

const LoginForm = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        handleSubmit,
        isDisabled,
    } = useLoginForm();

    return (
        <>
            <Form className="p-4 form" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        className={`input ${emailError ? 'is-invalid' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className="text-danger">{emailError}</div>}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className={`input ${passwordError ? 'is-invalid' : ''}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
                </Form.Group>
                <Button type="submit" text="Log in" className="login-button" disabled={isDisabled} />
            </Form>
        </>
    );
};

export default LoginForm;
