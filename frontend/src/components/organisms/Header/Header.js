import React from "react";

import Container from "react-bootstrap/Container";

import "./Header.scss";

import Search from "../../molecules/Search/Search";
const Header = () => {
  return (
    <Container fluid className={"header-container background-green"}>
      <Container className={"header-c"}>
        <h2 className={"header-title"}>Search, Rent, Play!</h2>
        <Search />
      </Container>
      <div className="svg-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,6,0,7.23V120H1200V7.23C1200,6,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Container>
  );
};

export default Header;
