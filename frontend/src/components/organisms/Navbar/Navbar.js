import React from "react";

import Container from "react-bootstrap/Container";
import NavbarBS from "react-bootstrap/Navbar";

import styles from "./Navbar.module.scss";

import Button from "../../atoms/Buttons/MainButton/MainButton";
import Search from "../../molecules/Search/Search";
import ProfileDropdown from "../../molecules/Dropdown/ProfileDropdown/ProfileDropdown";

import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import adminLinks from "./NavbarLinks/adminNavbarLinks";
import userLinks from "./NavbarLinks/userNavbarLinks";

//The Navbar for the Main Page is default,
// for the Search Page it is needed to pass the value "search", for the Admin Panel "admin" and for User Profiles "user" to the prop "variant"
const Navbar = ({ variant = "default", ...props }) => {
  let backgroundColor;

  switch (variant) {
    case "admin":
      backgroundColor = "background-blue";
      break;
    case "search":
      backgroundColor = "background-green";
      break;
    case "user":
      backgroundColor = "background-green";
      break;
    default:
      backgroundColor = "background-green";
      break;
  }

  let isAuth = false;

  const navigate = useNavigate();

  return (
    <NavbarBS className={`${backgroundColor} p-0`} expand="lg">
      <Container fluid id={styles.navbar}>
        <Logo />
        <NavbarBS.Toggle aria-controls="navbarScroll" />
        {variant === "search" ? (
          <div className={styles.navSearch}>
            <Search />
          </div>
        ) : null}
        <NavbarBS.Collapse id="navbarScroll" className="justify-content-end">
          <Container className={"text-center"}>
            {variant === "admin"
              ? adminLinks.map((l, index) => {
                  return (
                    <Link to={l.url} className={styles.adminLinks} key={index}>
                      {l.navbarText}
                    </Link>
                  );
                })
              : variant === "user"
              ? userLinks.map((l, index) => {
                  return (
                    <Link to={l.url} className={styles.adminLinks} key={index}>
                      {l.navbarText}
                    </Link>
                  );
                })
              : null}
          </Container>

          {isAuth === true ? (
            <ProfileDropdown />
          ) : (
            <div className={styles.navButtons}>
              <Button text={"Log in"} onClick={() => navigate("/login")} />
              <Button text={"Sign up"} onClick={() => navigate("/signup")} />
            </div>
          )}
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
