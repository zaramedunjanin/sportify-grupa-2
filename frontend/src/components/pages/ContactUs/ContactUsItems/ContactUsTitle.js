import React from "react";

import Container from "react-bootstrap/Container";

const ContactUsTitle = (props) => {
  const titleStyle = {
    fontWeight: "bold",
    textAlign: "center",
    margin: "5%",
  };

  return (
    <Container>
      <h2 style={titleStyle}>{props.title}</h2>
    </Container>
  );
};

export default ContactUsTitle;
