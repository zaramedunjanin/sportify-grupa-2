import React from "react";

import UserDashboard from "./UserDashboard";
import Navbar from "../../organisms/Navbar/Navbar";
import TablePage from "./UserDataPage/TablePage";
import useEffectTitle from "../../../hooks/useEffectTitle";

const UserDashboardPage = () => {
    useEffectTitle("User dashboard | Sportify")
  return (
    <>
      {" "}
      <Navbar variant={"user"} />
      <UserDashboard />
      <TablePage />
    </>
  );
};

export default UserDashboardPage;
