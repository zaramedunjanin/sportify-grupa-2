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
      <p style={textStyle_1}>{t("terms_of_use_text")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_1")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title_1")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_2")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_3")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title_2")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_4")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_5")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title_3")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_6")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title_4")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_7")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_8")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title_5")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_9")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title_6")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_10")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title_7")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_11")}</p>
      <br />
      <p style={textStyle_1}>{t("terms_of_use_title_8")}</p>
      <p style={textStyle_1}>{t("terms_of_use_text_12")}</p>
      <br />
    </Container>
  );
};

export default TermsOfUseText;
