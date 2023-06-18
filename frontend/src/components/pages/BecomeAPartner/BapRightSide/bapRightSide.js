import React from "react";
import Logo from "../../../organisms/Navbar/Logo";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useTranslation } from "react-i18next";

import "./bapRightSide.css";
import TranslationComponent from "../../TranslationComponent/TranslationComponent";

const BapRightSide = () => {
  const { t } = useTranslation();
  return (
    <Container className="background-green height">
      <Row>
        <Col xs={6}>
          <Logo />
        </Col>
        <Col xs={6}>
          <div className="dropdown_container_4 text-end">
            <TranslationComponent />
          </div>
        </Col>
      </Row>
      <Row className="p-0">
        <Col className="text_in_the_center">
          <h3 className="h3_center">{t("become_a_partner_heading")}</h3>
          <p className="p_center">{t("become_a_partner_paragraf")}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BapRightSide;
