import React, { useContext } from "react";

import UserDashboard from "./UserDashboard";
import Navbar from "../../organisms/Navbar/Navbar";
import TablePage from "./UserDataPage/TablePage";
import useEffectTitle from "../../../hooks/useEffectTitle";
import Footer from "../../organisms/Footer/Footer";

const UserDashboardPage = () => {
  useEffectTitle(`Profile | Sportify`);
  const userDashboardBgStyle = {
    backgroundColor: "whitesmoke",
    minHeight: "100vh",
  };

  useEffectTitle("User dashboard | Sportify");
  return (
    <div style={userDashboardBgStyle}>
      <Navbar variant={"user"} />
      <UserDashboard />
      <TablePage />
      <Footer />
    </div>
  );
};

export default UserDashboardPage;
