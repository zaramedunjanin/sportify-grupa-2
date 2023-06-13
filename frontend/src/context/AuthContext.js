// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const logout = () => {
    // Logic to handle logout and set isAuthenticated to false
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, logout, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
