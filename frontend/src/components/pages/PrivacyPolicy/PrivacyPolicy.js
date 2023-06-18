import React from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";
import PrivacyPolicyContent from "./PrivacyPolicyItems/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
