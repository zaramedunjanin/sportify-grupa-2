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
import TranslationComponent from "../../TranslationComponent/TranslationComponent";

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
              <div>
                <TranslationComponent />
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
