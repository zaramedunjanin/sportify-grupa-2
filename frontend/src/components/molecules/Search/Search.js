import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { SearchContext } from "./SearchContext";
import "./Search.scss";

import basketball from "../../../assets/images/basketball_search.png";

const Search = () => {
  const { searchText, updateSearchText } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateSearchText(inputValue);
    }
  };

  return (
    <Container fluid className={"search"}>
      <Form className="d-flex search-form">
        <div className={"input-container"}>
          <input
            className={"search-input"}
            placeholder={"Search..."}
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button className={"search-button"} type={"submit"}>
            <img src={basketball} className="search-img" />
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Search;
