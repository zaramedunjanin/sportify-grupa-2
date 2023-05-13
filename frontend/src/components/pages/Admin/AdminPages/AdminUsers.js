import React from "react";

import {Outlet} from "react-router-dom";
import AdminTable from "../AdminComponents/AdminTable";

const AdminUsers = () => {
    const headers =
        ["ID"]

    const data = [
        ["ID", "Name"],
        ["ID", "Name"]
    ]
    return (
        <>
            <AdminTable headers = {headers} data = {data}/>
            <Outlet />
        </>
    );
};

export default AdminUsers;
