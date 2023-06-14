import React from "react";

import { Outlet } from "react-router-dom";
import UserDataTable from "../../UserDashboard/UserDataTable/UserDataTable";
import useUserDatabase from "../UserDataTable/UserDatabase/useUserDatabase";
import UserDataHeader from "../UserDataHeader/UserDataHeader";

const TablePage = () => {
  const UserDatabase = useUserDatabase();
  return (
    <>
        <UserDataHeader title={UserDatabase["userdashboard"].title} />
        <UserDataTable databasecolumns={UserDatabase} />
      <Outlet />
    </>
  );
};

export default TablePage;
