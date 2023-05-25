import React from "react";

import Container from "react-bootstrap/Container";

import styles from "../../UserDashboard/UserDataHeader/UserDataHeader.module.css";
import UserDataSearch from "../UserDataSearch/UserDataSearch";

const UserDataHeader = ({ title }) => {
  return (
    <Container fluid>
      <Container className={styles.headerTitle}>
        <h4>{title}</h4>
      </Container>

      <Container className={styles.headerSearch}>
        <UserDataSearch />
      </Container>
    </Container>
  );
};

export default UserDataHeader;
