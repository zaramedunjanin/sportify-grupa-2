import React from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";
import PrivacyPolicyContent from "./PrivacyPolicyItems/PrivacyPolicyContent";
import useEffectTitle from "../../../hooks/useEffectTitle";

const PrivacyPolicy = () => {
  useEffectTitle("Privacy police | Sportify");
  return (
    <>
      <Navbar />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
