import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import NavbarBS from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import Button from "../../atoms/Buttons/MainButton/MainButton";
import Search from "../../molecules/Search/Search";
import ProfileDropdown from "../../molecules/Dropdown/ProfileDropdown/ProfileDropdown";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import adminLinks, {
  getAdminNavbarLinks,
} from "./NavbarLinks/adminNavbarLinks";
import companyNavbarLinks from "./NavbarLinks/companyNavbarLinks";
import userLinks, { getUserNavbarLinks } from "./NavbarLinks/userNavbarLinks";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../../context/AuthContext";
import TranslationComponent from "../../pages/TranslationComponent/TranslationComponent";

//The Navbar for the Main Page is default,
// for the Search Page it is needed to pass the value "search", for the Admin Panel "admin" and for User Profiles "user" to the prop "variant"
const Navbar = ({ variant = "default", ...props }) => {
  const url = window.location.href;
  console.log(url)
  const { t } = useTranslation();
  const userNavbarLinks = getUserNavbarLinks(t);
  const userAdminNavbarLinks = getAdminNavbarLinks(t);
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
    {
      code: "ger",
      name: t("name_5"),
      country_code: "ger",
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
  const { isAuthenticated, user } = useContext(AuthContext);

  // let isAuth = isAuthenticated;

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
            {variant === "admin" ? (
              <>
                <Dropdown className={styles.adminLinks}>
                  <Dropdown.Toggle
                    className={styles.adminLinks_1}
                    style={{ fontWeight: "bold" }}
                  >
                    {t("tables")}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="tables/users">
                      {t("users")}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="tables/sports">
                      {t("sports")}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="tables/venues">
                      {t("venues")}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="tables/acceptedinvites">
                      {t("accepted_invites")}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="tables/reservations">
                      {t("reservations")}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="tables/questions">
                      {t("questions")}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="tables/ratings">
                      {t("ratings")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link
                  to={"/administrator/verification"}
                  className={styles.adminLinks}
                  style={{ fontWeight: "bold" }}
                  key={1}
                >
                  {t("company_verification")}
                </Link>
              </>
            ) : (variant === "company" || url === "http://localhost:3000/userdashboard") ? (
              companyNavbarLinks.map((l, index) => {
                return (
                  <Link to={l.url} className={styles.adminLinks} key={index}>
                    {l.navbarText}
                  </Link>
                );
              })
                )
            : null}
          </Container>

          <TranslationComponent />
          {isAuthenticated === true ? (
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
