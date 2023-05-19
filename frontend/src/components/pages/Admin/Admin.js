import React from 'react';
import Navbar from "../../organisms/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const Admin = () => {
    return (
        <>
            <Navbar variant={"admin"}/>
            <Outlet/>
        </>
    )
}

export default Admin;
