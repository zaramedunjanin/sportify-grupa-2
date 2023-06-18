import React from "react";
import LoginContent from "./Login-content/LoginContent";
import useEffectTitle from "../../../hooks/useEffectTitle";

const LoginPage = () => {
  useEffectTitle("Login | Sportify");
  return <LoginContent />;
};

export default LoginPage;
