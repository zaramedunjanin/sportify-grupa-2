import React from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";
import ContactUsContent from "./ContactUsItems/ContactUsContent";
import useEffectTitle from "../../../hooks/useEffectTitle";

const ContactUs = () => {
    useEffectTitle("Contact us | Sportify")
  return (
    <>
      <Navbar />
      <ContactUsContent />
      <Footer />
    </>
  );
};

export default ContactUs;
