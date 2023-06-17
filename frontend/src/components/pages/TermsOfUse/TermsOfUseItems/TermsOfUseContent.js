import React from "react";
import TermsOfUseTitle from "./TermsOfUseTitle";
import TermsOfUseText from "./TermsOfUseText";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const TermsOfUseContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <TermsOfUseTitle title={t("terms_of_use")} />
      <TermsOfUseText />
    </>
  );
};

export default TermsOfUseContent;
