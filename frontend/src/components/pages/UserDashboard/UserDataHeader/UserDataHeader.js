import React from "react";

import Container from "react-bootstrap/Container";

import styles from "../../UserDashboard/UserDataHeader/UserDataHeader.module.css";
import UserDataSearch from "../UserDataSearch/UserDataSearch";
import { useTranslation } from "react-i18next";

const UserDataHeader = ({ title }) => {
  const { t } = useTranslation();
  return (
    <Container fluid>
      <Container className={styles.headerTitle}>
        <h4>{t("title_1")}</h4>
      </Container>

      <Container className={styles.headerSearch}>
        <UserDataSearch />
      </Container>
    </Container>
  );
};

export default UserDataHeader;
