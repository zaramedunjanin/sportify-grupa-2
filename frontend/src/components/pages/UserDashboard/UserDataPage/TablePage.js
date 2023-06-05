import React from "react";

import { Outlet } from "react-router-dom";
import UserDataTable from "../../UserDashboard/UserDataTable/UserDataTable";
import UserDataHeader from "../UserDataHeader/UserDataHeader";
import UserDatabase from "./UserDatabase/useUserDatabase";
import useUserDatabase from "./UserDatabase/useUserDatabase";

const TablePage = () => {
  let page = window.location.pathname.split("/").at(-1);
  const UserDatabase = useUserDatabase();
  return (
    <>
      <UserDataHeader title={UserDatabase[page].title} />
      <UserDataTable page={page} databasecolumns={UserDatabase} />
      <Outlet />
    </>
  );
};

export default TablePage;
