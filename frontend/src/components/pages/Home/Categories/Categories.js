import React from "react";
import { useTranslation } from "react-i18next";

import "./Categories.scss";

import Card from "./CategoryCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Categories = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className={"mt-4 mb-1"}>
        <h2>{t("sport")}</h2>
      </Row>
      <Row className={"text-center"}>
        <Col xs={6} md={4} lg={2}>
          <Card icon={"sports_soccer"} text={t("football")} />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card icon={"sports_tennis"} text={t("tennis")} />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card icon={"sports_volleyball"} text={t("volleyball")} />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card icon={"sports_basketball"} text={t("basketball")} />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card icon={"ice_skating"} text={t("ice_skating")} />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card icon={"pool"} text={t("swimming")} />
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
