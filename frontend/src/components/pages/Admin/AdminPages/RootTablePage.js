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
      <Outlet />
    </>
  );
};

export default RootTablePage;
