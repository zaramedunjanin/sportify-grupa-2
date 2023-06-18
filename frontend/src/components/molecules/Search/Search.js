import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { SearchContext } from "../../../context/SearchContext";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./Search.scss";
import { useNavigate } from "react-router-dom";
import basketball from "../../../assets/images/basketball_search.png";

const Search = () => {
  const navigate = useNavigate();
  const { updateSearchText } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      let page = window.location.pathname.split("/").at(-1);
      if (page === "") navigate("search");
      event.preventDefault();
      updateSearchText(inputValue);
    }
  };

  const handleSearchBtnClick = () => {
    let page = window.location.pathname.split("/").at(-1);
    updateSearchText(inputValue);
    if (page === "") navigate("search");
  };

  const { t } = useTranslation();
  return (
    <Container fluid className={"search"}>
      <Form className="d-flex search-form">
        <div className={"input-container"}>
          <input
            className={"search-input"}
            placeholder={t("placeholder")}
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className={"search-button"}
            type={"button"}
            onClick={handleSearchBtnClick}
          >
            <img src={basketball} className="search-img" />
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Search;
