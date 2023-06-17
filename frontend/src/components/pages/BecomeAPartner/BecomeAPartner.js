import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../Signup/Signup.css";
import BecomeAPartnerForm from "./BapForm/BecomeAPartner";
import BapRightSide from "./BapRightSide/bapRightSide";

const BecomeAPartner = () => {
    return (
        <Container fluid>
            <div className="flexWrapReverse flexWidth">
                <Row>
                    <Col xs={12} sm={7} className="p-0 firstCol">
                        <BecomeAPartnerForm />
                    </Col>
                    <Col xs={12} sm={5} className="p-0">
                        <BapRightSide />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default BecomeAPartner;
