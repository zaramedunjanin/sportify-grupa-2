import React from "react";
import PrivacyPolicyTitle from "./PrivacyPolicyTitle";
import PrivacyPolicyTextText from "./PrivacyPolicyText";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const PrivacyPolicyContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <PrivacyPolicyTitle title={t("privacy")} />
      <PrivacyPolicyTextText />
    </>
  );
};

export default PrivacyPolicyContent;
