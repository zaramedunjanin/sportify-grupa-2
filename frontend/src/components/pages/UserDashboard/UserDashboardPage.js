import React from "react";

import UserDashboard from "./UserDashboard";
import Navbar from "../../organisms/Navbar/Navbar";
import TablePage from "./UserDataPage/TablePage";

const UserDashboardPage = () => {
  return (
    <>
      {" "}
      <Navbar variant={"user"}/>
      <UserDashboard />
      <TablePage />
    </>
  );
};

export default UserDashboardPage;
