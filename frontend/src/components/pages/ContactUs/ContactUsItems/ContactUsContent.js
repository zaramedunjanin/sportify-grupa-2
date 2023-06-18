import React from "react";
import ContactUsTitle from "./ContactUsTitle";
import ContactUsText from "./ContactUsText";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const ContactUsContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContactUsTitle title={t("contact")} />
      <ContactUsText />
    </>
  );
};

export default ContactUsContent;
