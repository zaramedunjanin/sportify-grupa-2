import React from "react";

import Container from "react-bootstrap/Container";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const PrivacyPolicyText = () => {
  const { t } = useTranslation();
  const textStyle = {
    textAlign: "justify",
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "10%",
  };

  return (
    <Container fluid>
      <p style={textStyle}>{t("privacy_policy_text")}</p>
      <br />
      <p style={textStyle}>{t("privacy_policy_title")}</p>
      <p style={textStyle}>{t("privacy_policy_text_1")}</p>
      <p style={textStyle}>{t("privacy_policy_text_2")}</p>
      <p style={textStyle}>{t("privacy_policy_text_3")}</p>
      <br />
      <p style={textStyle}>{t("privacy_policy_title_1")}</p>
      <p style={textStyle}>{t("privacy_policy_text_4")}</p>
      <p style={textStyle}>{t("privacy_policy_text_5")}</p>
      <p style={textStyle}>{t("privacy_policy_text_6")}</p>
      <p style={textStyle}>{t("privacy_policy_text_7")}</p>
      <br />
      <p style={textStyle}>{t("privacy_policy_title_2")}</p>
      <p style={textStyle}>{t("privacy_policy_text_8")}</p>
      <p style={textStyle}>{t("privacy_policy_text_9")}</p>
      <p style={textStyle}>{t("privacy_policy_text_10")}</p>
      <br />
      <p style={textStyle}>{t("privacy_policy_title_3")}</p>
      <p style={textStyle}>{t("privacy_policy_text_11")}</p>
      <br />
      <p style={textStyle}>{t("privacy_policy_title_4")}</p>
      <p style={textStyle}>{t("privacy_policy_text_12")}</p>
      <p style={textStyle}>{t("privacy_policy_text_13")}</p>
      <br />
      <p style={textStyle}>{t("privacy_policy_title_5")}</p>
      <p style={textStyle}>{t("privacy_policy_text_14")}</p>
      <br />
      <p style={textStyle}>{t("privacy_policy_title_6")}</p>
      <p style={textStyle}>{t("privacy_policy_text_15")}</p>
      <br />
      <p style={textStyle}>{t("privacy_policy_title_7")}</p>
      <p style={textStyle}>{t("privacy_policy_text_16")}</p>
      <br />
    </Container>
  );
};

export default PrivacyPolicyText;
