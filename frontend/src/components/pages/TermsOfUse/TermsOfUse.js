import React from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";
import TermsOfUseContent from "./TermsOfUseItems/TermsOfUseContent";
import useEffectTitle from "../../../hooks/useEffectTitle";

const TermsOfUse = () => {
    useEffectTitle("Terms of use | Sportify")
  return (
    <>
      <Navbar />
      <TermsOfUseContent />
      <Footer />
    </>
  );
};

export default TermsOfUse;
