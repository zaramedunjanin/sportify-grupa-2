import React from "react";

import Container from "react-bootstrap/Container";
import NavbarBS from "react-bootstrap/Navbar";

import "../../../organisms/Navbar/Navbar.module.scss";

import Logo from "../../../organisms/Navbar/Logo";
const NavbarLogin = () => {
  return (
    <NavbarBS className="background-green p-0" id="navbar" expand="lg">
      <Container>
        <NavbarBS.Brand href="#">
          <Logo />
        </NavbarBS.Brand>
      </Container>
    </NavbarBS>
  );
};

export default NavbarLogin;
