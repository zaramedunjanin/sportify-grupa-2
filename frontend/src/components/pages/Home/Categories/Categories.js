import React, { useContext } from "react";
import { CategoryContext } from "../../../../context/CategoryContext";
import { useTranslation } from "react-i18next";

import "./Categories.scss";
import { useNavigate } from "react-router-dom";
import Card from "./CategoryCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Categories = () => {
  const { updateCategory } = useContext(CategoryContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    updateCategory(id);
    window.location.href = "/search";
  };

  const { t } = useTranslation();
  return (
    <Container>
      <Row className={"mt-4 mb-1"}>
        <h2>{t("sports_1")}</h2>
      </Row>
      <Row className={"text-center"}>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"sports_soccer"}
            text={t("football")}
            onClick={()=>handleClick(54)}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"sports_tennis"}
            text={t("tennis")}
            onClick={()=>handleClick(55)}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"sports_volleyball"}
            text={t("volleyball")}
            onClick={()=>handleClick(56)}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"sports_basketball"}
            text={t("basketball")}
            onClick={()=>handleClick(57)}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"ice_skating"}
            text={t("ice_skating")}
            onClick={()=>handleClick(58)}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card
              icon={"pool"}
              text={t("swimming")}
              onClick={()=>handleClick(59)} />
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
