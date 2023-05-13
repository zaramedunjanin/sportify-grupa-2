import React from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import AdminHeader from "./AdminComponents/AdminHeader";
import AdminTable from "./AdminComponents/AdminTable";
import NavbarBS from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../../organisms/Navbar/Logo";
import {Link, Outlet} from "react-router-dom";
const Admin = () => {
    return (
        <>
            <NavbarBS className="background-green" id="navbar" expand="lg">
                <Container fluid>
                    <NavbarBS.Brand href="#">
                        <Logo />
                    </NavbarBS.Brand>
                    <NavbarBS.Collapse id="navbarScroll" className="justify-content-end">
                    <Link to={'users'}>Users</Link>
                        <Link to={'facilities'}>Facilities</Link>
                        <Link to={'sports'}>Sports</Link>

                    </NavbarBS.Collapse>
                </Container>
            </NavbarBS>
            <AdminHeader/>
            <Outlet />
        </>
    );
};

export default Admin;
