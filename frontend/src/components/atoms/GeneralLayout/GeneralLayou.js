import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import logo from "../../assets/sportify.png";

import "./GeneralLayout.css";

const GeneralLayout = () => {
  return (
    <Container>
      <Row className="background">
        <Col xs={12}></Col>
        <img className="image" src={logo} alt="logo" />
      </Row>
      <Row className="content">
        <Col xs={12}>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
          <p className="paragraf"> SADRŽAJ </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralLayout;
