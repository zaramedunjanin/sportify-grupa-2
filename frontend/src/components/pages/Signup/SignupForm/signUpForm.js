import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "../SignupForm/signUpForm.css";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";
import useSignUp from "../../../../hooks/useSignUp";
const SignUpForm = () => {
  const { t } = useTranslation();

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
            className={`input_1 ${firstNameError ? "is-invalid" : ""}`}
            placeholder={t("fname")}
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
            className={`input_1 ${lastNameError ? "is-invalid" : ""}`}
            placeholder={t("lname")}
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
            className={`input_1 ${cityError ? "is-invalid" : ""}`}
            placeholder={t("city")}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {cityError && <div className="text-danger small">{cityError}</div>}
        </Col>
        <Col xs={12} className="mt-3 pt-1">
          <input
            type="text"
            className={`input_1 ${phoneNumberError ? "is-invalid" : ""}`}
            placeholder={t("pnumber")}
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
            className={`input_1 ${usernameError ? "is-invalid" : ""}`}
            placeholder={t("username")}
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
            className={`input_1 ${emailError ? "is-invalid" : ""}`}
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger small">{emailError}</div>}
        </Col>

        <Col xs={12} className="mt-3 pt-1">
          <input
            type="password"
            className={`input_1 ${passwordError ? "is-invalid" : ""}`}
            placeholder={t("password")}
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
              text={t("sign_up")}
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
