import React from "react";

import Container from "react-bootstrap/Container";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const TermsOfUseText = () => {
  const { t } = useTranslation();
  const textStyle_1 = {
    textAlign: "justify",
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "20%",
  };

  return (
    <Container fluid>
      <p style={textStyle_1}>{t("terms_of_use_text_2")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_1")}</p>
    </Container>
  );
};

export default TermsOfUseText;
