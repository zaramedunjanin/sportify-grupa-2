import React from "react";

import Container from "react-bootstrap/Container";

import styles from "./AdminHeader.module.scss";
import AdminSearch from "../AdminSearch/AdminSearch";
const AdminHeader = ({ title }) => {
  return (
    <>
      <Container className={styles.headerTitle}>
        <h4>{title}</h4>
      </Container>
    </>
  );
};

export default AdminHeader;
