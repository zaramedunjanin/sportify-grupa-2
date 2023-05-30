import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "./GeneralLayout.css";

const GeneralLayout = ({ children }) => {
  return (
    <Container>
      <Row className="background">
        <Col xs={12}></Col>
      </Row>
      <Row className="content">
        <Col xs={12}>{children}</Col>
      </Row>
    </Container>
  );
};

export default GeneralLayout;
