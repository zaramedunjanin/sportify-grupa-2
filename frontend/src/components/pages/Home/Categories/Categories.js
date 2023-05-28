import React, { useContext } from "react";
import { CategoryContext } from "../../../../context/CategoryContext";
import "./Categories.scss";
import { useNavigate } from "react-router-dom";
import Card from "./CategoryCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Categories = () => {
  const { updateCategory } = useContext(CategoryContext);
  const navigate = useNavigate();

  const handleClick = () => {
    updateCategory(1);
    navigate("search");
  };

  return (
    <Container>
      <Row className={"mt-4 mb-1"}>
        <h2>Popular Sports</h2>
      </Row>
      <Row className={"text-center"}>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"sports_soccer"}
            text={"Football"}
            onClick={handleClick}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card icon={"sports_tennis"} text={"Tennis"} onClick={handleClick} />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"sports_volleyball"}
            text={"Volleyball"}
            onClick={handleClick}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"sports_basketball"}
            text={"Basketball"}
            onClick={handleClick}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card
            icon={"ice_skating"}
            text={"Ice Skating"}
            onClick={handleClick}
          />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card icon={"pool"} text={"Swimming"} onClick={handleClick} />
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
