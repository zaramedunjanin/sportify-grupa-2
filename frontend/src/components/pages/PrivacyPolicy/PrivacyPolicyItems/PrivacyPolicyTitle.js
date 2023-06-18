import React from "react";

import Container from "react-bootstrap/Container";

const PrivacyPolicyTitle = (props) => {
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

export default PrivacyPolicyTitle;
