import React from "react";

import {Link, Outlet} from "react-router-dom";

import Navbar from "../../organisms/Navbar/Navbar"

const Admin = () => {

    return (
        <>
            <Navbar variant={"admin"}/>
            <Outlet/>
        </>
    );
};

export default Admin;
