import React from "react";

import {Outlet} from "react-router-dom";
const AdminFacilities = () => {
    return (
        <>
            <h1>USERS</h1>
            <Outlet />
        </>
    );
};

export default AdminFacilities;