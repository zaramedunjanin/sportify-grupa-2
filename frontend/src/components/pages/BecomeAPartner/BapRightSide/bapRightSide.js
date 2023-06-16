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
          <TranslationComponent />
        </Col>
      </Row>
      <Row className="p-0">
        <Col className="text_in_the_center">
          <h3 className="h3_center">Become a partner</h3>
          <p className="p_center">Expand your reach, connect with new customers, and grow your business</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BapRightSide;
