import { useState } from "react";

const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let isDisabled = false;

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
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    handleSubmit,
    isDisabled,
  };
};

export default useLoginForm;
