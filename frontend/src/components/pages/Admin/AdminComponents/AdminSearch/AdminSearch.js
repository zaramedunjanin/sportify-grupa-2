import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import styles from "./AdminSearch.module.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const AdminSearch = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className={"search"}>
      <Form className="d-flex search-form">
        <div className={"input-container"}>
          <input className={"search-input"} placeholder={t("search")} />
          <button className={"search-button"} type={"submit"}></button>
        </div>
      </Form>
    </Container>
  );
};

export default AdminSearch;
