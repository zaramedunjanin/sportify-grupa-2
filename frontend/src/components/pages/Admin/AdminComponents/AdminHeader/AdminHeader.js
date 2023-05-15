import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Search from "../../../../molecules/Search/Search";
import styles from "../AdminTable/AdminTable.module.scss";

const AdminHeader = () => {
    const headerStyle = {
        padding: "1rem",
        marginTop: "2rem",
        marginBottom: "1rem",
        backgroundColor: "#688cff"
    }

    return (
        <Container style={headerStyle}>
            <Row>
                <Col  xs = "4" className={"text-start"}>

                <div className={""}>User Management</div>
                </Col>

                <Col  xs = "4" className={"text-start"}>
                    <Search/>
                </Col>
                <Col  xs= "4"  className={"text-end"}>
                        <h4>filter</h4>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminHeader;
