import React from "react";
import Logo from "../../../organisms/Navbar/Logo";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./signupRightSide.css";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";

import { useNavigate } from "react-router-dom";

const SignupRightSide = () => {
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
  const navigate = useNavigate();
  return (
    <Container className="background-green height">
      <Row>
        <Col xs={6}>
          <Logo />
        </Col>
        <Col className="translate-button" xs={6}>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle p-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                color: "white",
              }}
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
        </Col>
      </Row>
      <Row className="p-0">
        <Col className="text_in_the_center">
          <h3 className="h3_center">{t("heading_right")}</h3>
          <p className="p_center">{t("paragraf_right")}</p>
          <div className="centerContainer">
            <MainButton text={t("log_in")} onClick={() => navigate("/login")} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupRightSide;
