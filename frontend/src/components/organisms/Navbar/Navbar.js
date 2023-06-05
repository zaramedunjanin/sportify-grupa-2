import React from "react";

import Container from "react-bootstrap/Container";
import NavbarBS from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";

import styles from "./Navbar.module.scss";

import Button from "../../atoms/Buttons/MainButton/MainButton";
import Search from "../../molecules/Search/Search";
import ProfileDropdown from "../../molecules/Dropdown/ProfileDropdown/ProfileDropdown";

import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import adminLinks from "./NavbarLinks/adminNavbarLinks";
import userLinks from "./NavbarLinks/userNavbarLinks";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

//The Navbar for the Main Page is default,
// for the Search Page it is needed to pass the value "search", for the Admin Panel "admin" and for User Profiles "user" to the prop "variant"
const Navbar = ({ variant = "default", ...props }) => {
  const { t } = useTranslation();
  const languages = [
    {
      code: "en",
      name: t("name"),
      country_code: "en",
    },
    {
      code: "bhs",
      name: t("name_1"),
      country_code: "bhs",
    },
  ];

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

  let isAuth = true;

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

          <div className="dropdown">
            <button
              className="btn dropdown-toggle p-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="material-symbols-outlined">translate</span>
            </button>
            <ul className="dropdown-menu">
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button
                    className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    <span className={`mx-2`}></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {isAuth === true ? (
            <ProfileDropdown />
          ) : (
            <div className={styles.navButtons}>
              <Button text={t("log_in")} onClick={() => navigate("/login")} />
              <Button text={t("sign_up")} onClick={() => navigate("/signup")} />
            </div>
          )}
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
