import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const UserDataSearch = () => {
  return (
    <Container fluid className="search">
      <Form className="d-flex search-form">
        <div className="input-container">
          <input className="search-input" placeholder="Search..." />
          <button className="search-button" type="submit"></button>
        </div>
      </Form>
    </Container>
  );
};

export default UserDataSearch;
