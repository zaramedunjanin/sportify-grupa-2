import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  let isDisabled = false;
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(AuthContext);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (email.trim() === "") {
      setEmailError("E-mail is required");
      isDisabled = true;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isDisabled = true;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isDisabled = true;
    }

    if (!isDisabled) {
      axios
        .post("http://127.0.0.1:8000/api/token/", {
          email: email,
          password: password,
        })
        .then((response) => {
          setIsAuthenticated(true);
          localStorage.setItem("token", response.data.access);
          window.location.href = "/";
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            setLoginError(error.response.data.detail);
          } else {
            setLoginError("An error occurred during login");
          }
        });
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    loginError,
    handleSubmit,
    isDisabled,
  };
};

export default useLoginForm;
