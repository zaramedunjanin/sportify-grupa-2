import React from "react";

import { Outlet } from "react-router-dom";
import UserDataTable from "../../UserDashboard/UserDataTable/UserDataTable";
import UserDataHeader from "../UserDataHeader/UserDataHeader";
import UserDatabase from "../UserDataPage/UserDatabase/UserDatabase";

const TablePage = () => {
  let page = window.location.pathname.split("/").at(-1);
  return (
    <>
      <UserDataHeader title={UserDatabase[page].title} />
      <UserDataTable page={page} databasecolumns={UserDatabase} />
      <Outlet />
    </>
  );
};

export default TablePage;
