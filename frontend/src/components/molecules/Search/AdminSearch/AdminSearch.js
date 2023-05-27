import React from "react";

import "./AdminSearch.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const AdminSearch = () => {
  return (
    <Container fluid>
      <Form>
        <div>
          <input className={"search-input"} placeholder={"Search..."} />
        </div>
      </Form>
    </Container>
  );
};

export default AdminSearch;
