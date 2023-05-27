import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "../SignupForm/signUpForm.css";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";
import useSignUp from "../../../../hooks/useSignUp";
const SignUpForm = () => {
  const {
    handleSubmit,
    isDisabled,

    firstName,
    setFirstName,
    firstNameError,

    lastName,
    setLastName,
    lastNameError,

    city,
    setCity,
    cityError,

    phoneNumber,
    setPhoneNumber,
    phoneNumberError,

    username,
    setUsername,
    usernameError,

    password,
    setPassword,
    passwordError,

    email,
    setEmail,
    emailError,
  } = useSignUp();

  return (
    <Container className="inputContainer">
      <Row className="inputBackground">
        <Col xs={6} className="pr-2">
          <input
            type="text"
            className={`input ${firstNameError ? "is-invalid" : ""}`}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && (
            <div className="text-danger small">{firstNameError}</div>
          )}
        </Col>
        <Col xs={6} className="pl-2">
          <input
            type="text"
            className={`input ${lastNameError ? "is-invalid" : ""}`}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && (
            <div className="text-danger small">{lastNameError}</div>
          )}
        </Col>

        <Col xs={12} className="mt-3 pt-1">
          <input
            type="text"
            className={`input ${cityError ? "is-invalid" : ""}`}
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {cityError && <div className="text-danger small">{cityError}</div>}
        </Col>
        <Col xs={12} className="mt-3 pt-1">
          <input
            type="text"
            className={`input ${phoneNumberError ? "is-invalid" : ""}`}
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {phoneNumberError && (
            <div className="text-danger small">{phoneNumberError}</div>
          )}
        </Col>
        <Col xs={12} className="mt-3 pt-1">
          <input
            type="text"
            className={`input ${usernameError ? "is-invalid" : ""}`}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && (
            <div className="text-danger small">{usernameError}</div>
          )}
        </Col>

        <Col xs={12} className="mt-3 pt-1">
          <input
            type="email"
            className={`input ${emailError ? "is-invalid" : ""}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger small">{emailError}</div>}
        </Col>

        <Col xs={12} className="mt-3 pt-1">
          <input
            type="password"
            className={`input ${passwordError ? "is-invalid" : ""}`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <div className="text-danger small">{passwordError}</div>
          )}
        </Col>

        <Row style={{ paddingRight: "0" }}>
          <Col className="centerContainer mt-4">
            <MainButton
              className="form-button"
              text={"Sign Up"}
              onClick={handleSubmit}
              disabled={isDisabled}
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default SignUpForm;
