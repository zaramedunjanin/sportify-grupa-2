import React from "react";

import UserDashboard from "./UserDashboard";
import Navbar from "../../organisms/Navbar/Navbar";
import TablePage from "./UserDataPage/TablePage";
import useEffectTitle from "../../../hooks/useEffectTitle";

const UserDashboardPage = () => {
    useEffectTitle(`Admin | Sportify`);
    const userDashboardBgStyle = {
        backgroundColor: "whitesmoke",
        minHeight: "100vh"
    }
  return (
      <div style={userDashboardBgStyle} >
      <Navbar variant={"user"} />
      <UserDashboard />
      <TablePage />
    </div>
  );
};

export default UserDashboardPage;
