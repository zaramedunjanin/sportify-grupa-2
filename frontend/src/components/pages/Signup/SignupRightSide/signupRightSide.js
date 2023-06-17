import React from "react";
import Logo from "../../../organisms/Navbar/Logo";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useTranslation } from "react-i18next";

import "./signupRightSide.css";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";

import { useNavigate } from "react-router-dom";
import TranslationComponent from "../../TranslationComponent/TranslationComponent";

const SignupRightSide = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container className="background-green height">
      <Row>
        <Col xs={6}>
          <Logo />
        </Col>
        <Col xs={6}>
          <div className="dropdown_container_2 text-end">
            <TranslationComponent />
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
