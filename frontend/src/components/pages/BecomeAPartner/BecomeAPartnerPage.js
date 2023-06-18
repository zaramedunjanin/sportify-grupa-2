import React from "react";

import BecomeAParnter from "./BecomeAPartner";
import useEffectTitle from "../../../hooks/useEffectTitle";

const BecomeAPartnerPage = () => {
  useEffectTitle("Become a partner | Sportify");
  return <BecomeAParnter />;
};

export default BecomeAPartnerPage;
