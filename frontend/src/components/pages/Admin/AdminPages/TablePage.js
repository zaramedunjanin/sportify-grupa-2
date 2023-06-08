import React from "react";

import { Outlet } from "react-router-dom";
import AdminTable from "../AdminComponents/AdminTable/AdminTable";
import AdminHeader from "../AdminComponents/AdminHeader/AdminHeader";
import databaseColumns from "./DatabaseColumns/databaseColumns";

const AdminPages = () => {
  let page = window.location.pathname.split("/").at(-1);
  return (
    <>
      <AdminHeader title={databaseColumns[page].title} />
      <AdminTable page={page} databasecolumns={databaseColumns} />
      <Outlet />
    </>
  );
};

export default AdminPages;
