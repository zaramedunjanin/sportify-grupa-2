import React from "react";

import Container from "react-bootstrap/Container";

import Offcanvas from "../../../../atoms/Offcanvas/Offcanvas";
import Search from "../../../../molecules/Search/Search";
import styles from "./AdminHeader.module.scss"
import AdminSearch from "../AdminSearch/AdminSearch";
const AdminHeader = () => {


    return (
        <Container fluid>
            <Container className={styles.headerTitle}>
                <h4>User Management</h4>
            </Container>

            <Container className={styles.headerSearch}>
                        <AdminSearch/>

            </Container>
        </Container>
    );
};

export default AdminHeader;
