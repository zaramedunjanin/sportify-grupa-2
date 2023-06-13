import React from "react";

import { Outlet, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styles from "./RootTablePage.module.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const RootTablePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className={styles.tableLinkContainer}>
        <Link to={"users"} className={styles.tableLinks}>
          {t("users")}
        </Link>
        <Link to={"sports"} className={styles.tableLinks}>
          {t("sports")}
        </Link>
        <Link to={"venues"} className={styles.tableLinks}>
          {t("venues")}
        </Link>
        <Link to={"acceptedinvites"} className={styles.tableLinks}>
          {t("accepted_invites")}
        </Link>
        <Link to={"reservations"} className={styles.tableLinks}>
          {t("reservations")}
        </Link>
        <Link to={"questions"} className={styles.tableLinks}>
          {t("questions")}
        </Link>
        <Link to={"ratings"} className={styles.tableLinks}>
          {t("ratings")}
        </Link>
      </Container>

      <Outlet />
    </>
  );
};

export default RootTablePage;
