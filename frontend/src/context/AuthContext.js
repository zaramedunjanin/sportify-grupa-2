// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../services/HttpService/HttpService";

export const AuthContext = createContext();

const initialUser = {
  email: "",
  role: "",
  username: "",
  first_name: "",
  last_name: "",
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(initialUser); // u slucaju da zelimo cuvati vise podataka o korisniku tokom sesije
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      instance
        .get("auth/user")
        .then((response) => {
          setIsAuthenticated(true);
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const logout = () => {
    // Logic to handle logout and set isAuthenticated to false
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, logout, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
