import React from "react";
import { Form } from "react-bootstrap";
import Button from "../../../atoms/Buttons/MainButton/MainButton";
import "./LoginForm.scss";
import useLoginForm from "../../../../hooks/useLogin";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LoginForm = () => {
  const { t } = useTranslation();
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
            placeholder={t("email")}
            className={`input ${emailError ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder={t("password")}
            className={`input ${passwordError ? "is-invalid" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <Form.Text className="text-danger">{passwordError}</Form.Text>
          )}
        </Form.Group>
        <Button
          type="submit"
          text={t("log_in")}
          className="login-button"
          disabled={isDisabled}
        />
      </Form>
    </>
  );
};

export default LoginForm;
