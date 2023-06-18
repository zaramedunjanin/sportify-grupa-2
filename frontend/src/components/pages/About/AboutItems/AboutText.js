import React from "react";

import Container from "react-bootstrap/Container";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const AboutText = () => {
  const { t } = useTranslation();
  const textStyle = {
    textAlign: "center",
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "10%",
  };

  return (
    <Container fluid>
      <p style={textStyle}>{t("about_text")}</p>
    </Container>
  );
};

export default AboutText;
