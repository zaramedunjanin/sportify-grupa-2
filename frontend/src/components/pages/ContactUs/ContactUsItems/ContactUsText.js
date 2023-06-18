import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const ContactUsText = () => {
  const { t } = useTranslation();
  const contactInfo = [
    { icon: <FaEnvelope size={40} />, text: t("contact_us_email") },
    { icon: <FaPhone size={40} />, text: t("contact_us_phone") },
    {
      icon: <FaMapMarkerAlt size={40} />,
      text: t("contact_us_address"),
    },
    {
      icon: <FaClock size={40} />,
      text: [t("contact_us_hours"), t("pon_fri"), t("sat_san")],
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <p>{t("contact_us_text")}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {contactInfo.map(({ icon, text }) => (
          <div style={{ marginBottom: "20px" }} key={text}>
            {icon}
            {Array.isArray(text) ? (
              text.map((line, index) => <p key={index}>{line}</p>)
            ) : (
              <p>{text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsText;
