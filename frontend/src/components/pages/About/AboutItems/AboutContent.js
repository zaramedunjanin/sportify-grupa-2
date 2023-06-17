import React from "react";
import AboutTitle from "./AboutTitle";
import AboutText from "./AboutText";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const AboutContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <AboutTitle title={t("about")} />
      <AboutText />
    </>
  );
};

export default AboutContent;
