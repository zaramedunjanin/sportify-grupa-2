import React from "react";

import { Outlet } from "react-router-dom";
import AdminTable from "../AdminComponents/AdminTable/AdminTable";
import AdminHeader from "../AdminComponents/AdminHeader/AdminHeader";
import databaseColumns from "./DatabaseColumns/databaseColumns";
import useDatabaseColumns from "./DatabaseColumns/useDatabaseColumns";

const AdminPages = () => {
  let page = window.location.pathname.split("/").at(-1);
  const DatabaseColumn = useDatabaseColumns();
  return (
    <>
      <AdminHeader title={DatabaseColumn[page].title} />
      <AdminTable page={page} databasecolumns={DatabaseColumn} />
      <Outlet />
    </>
  );
};

export default AdminPages;
