import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserData from "./UserData/UserData";
import useEffectTitle from "../../../hooks/useEffectTitle";

const UserDashboard = () => {
  return (
    <Container fluid>
      <div className="flexWrapReverse flexWidth">
        <Row>
          <Col xs={12} sm={7} className="p-0 firstCol">
            <UserData />
          </Col>
          <Col xs={12} sm={5} className="p-0"></Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserDashboard;
