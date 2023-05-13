import React from "react";

import Search from "../../../molecules/Search/Search";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AdminHeader = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Search/>
                    <h1>FILTER</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminHeader;
