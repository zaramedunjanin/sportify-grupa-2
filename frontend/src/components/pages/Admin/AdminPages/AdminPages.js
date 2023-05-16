import React from "react";

import {Outlet} from "react-router-dom";
import AdminTable from "../AdminComponents/AdminTable/AdminTable";
import AdminHeader from "../AdminComponents/AdminHeader/AdminHeader";

const AdminPages = ({text}) => {
    const headers =
        ["ID"]

    const data = [
        ["ID", "Name"],
        ["ID", "Name"]
    ]
    return (
        <>
            <AdminHeader/>
            <AdminTable headers = {headers} data = {data}/>
            <Outlet />
        </>
    );
};

export default AdminPages;
