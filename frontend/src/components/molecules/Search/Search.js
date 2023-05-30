import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./Search.scss";

import basketball from "../../../assets/images/basketball_search.png";

const Search = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className={"search"}>
      <Form className="d-flex search-form">
        <div className={"input-container"}>
          <input className={"search-input"} placeholder={t("placeholder")} />
          <button className={"search-button"} type={"submit"}>
            <img src={basketball} className="search-img" />
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Search;
