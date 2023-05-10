import React from "react";

import Container from "react-bootstrap/Container";
import NavbarBS from "react-bootstrap/Navbar";

import "./Navbar.scss";

import Button from "../../atoms/Buttons/MainButton";

import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarBS className="background-green" id="navbar" expand="lg">
      <Container fluid>
        <NavbarBS.Brand href="#">
          <Logo />
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="navbarScroll" />
        <NavbarBS.Collapse id="navbarScroll" className="justify-content-end">
          <Button text={"Log in"} onClick={() => navigate("/login")} />
          <Button text={"Sign up"} onClick={() => navigate("/signup")} />
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
