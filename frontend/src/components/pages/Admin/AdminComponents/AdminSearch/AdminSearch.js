import React from "react";

import styles from "./AdminSearch.module.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const AdminSearch = () => {
    return (
        <Container fluid className={"search"}>
            <Form className="d-flex search-form">
                <div className={"input-container"}>
                    <input className={"search-input"} placeholder={"Search..."}/>
                </div>
            </Form>

        </Container>
    );
};

export default AdminSearch;
