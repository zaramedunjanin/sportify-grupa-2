import React from "react";

import Container from "react-bootstrap/Container";

import styles from "./UserDataHeader.module.scss";
const UserDataHeader = ({ title }) => {
  return (
    <>
      <Container className={styles.headerTitle}>
        <h4>{title}</h4>
      </Container>
    </>
  );
};

export default UserDataHeader;
