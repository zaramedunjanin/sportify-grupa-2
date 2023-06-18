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

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("token");
    console.log("fetch user");
    if (token) {
      instance
        .get("auth/user")
        .then((response) => {
          setIsAuthenticated(true);
          setUser(response.data);
          console.log("fetched user");
          console.log(response.data);
        })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });

      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const logout = () => {
    // Logic to handle logout and set isAuthenticated to false
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        logout,
        setIsAuthenticated,
        user,
        setUser,
        fetchUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
