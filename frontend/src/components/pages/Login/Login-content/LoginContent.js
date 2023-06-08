import React from "react";
import { Col, Row } from "react-bootstrap";
import LoginForm from "../Login Form/LoginForm";
import Container from "react-bootstrap/Container";
import "./LoginContent.scss";
import Button from "../../../atoms/Buttons/MainButton/MainButton";
import Navbar from "../Navbar-login/Navbar-login";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const navigate = useNavigate();
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
  return (
    <>
      <Container fluid className={"container_1"}>
        <Row>
          <Col sm={5}>
            <div className="dropdown_container">
              <Navbar />
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle tr_button_1 p-3"
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
            </div>
            <div className="bg-lightgreen left-side">
              <h3 className="login-h">{t("heading_left")}</h3>
              <p>{t("paragraf_left")}</p>
              <Button text={t("sign_up")} onClick={() => navigate("/signup")} />
            </div>
          </Col>
          <Col className="right-side d-flex justify-content-center " sm={7}>
            <div>
              <h2 className="display-8">{t("welcome")}</h2>
              <LoginForm />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginContent;
