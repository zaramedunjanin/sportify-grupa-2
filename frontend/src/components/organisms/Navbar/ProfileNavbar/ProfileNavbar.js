import React from "react";
import {Link, Outlet} from "react-router-dom";

import styles from "../Navbar.module.scss";

import Container from "react-bootstrap/Container";
import NavbarBS from "react-bootstrap/Navbar";

import ProfileDropdown from "../../../molecules/Dropdown/ProfileDropdown/ProfileDropdown";
import Logo from "../Logo";

import adminLinks from "./adminNavbarLinks";
import userLinks from "./userNavbarLinks";

const ProfileNavbar = ({
                           variant = "default",
                           ...props
                       }
) => {
    let backgroundColor;

    switch (variant) {
        case "admin":
            backgroundColor = "background-blue";
            break;
        default:
            backgroundColor = "background-green";
            break;
    }

    return (
        <NavbarBS className={backgroundColor} expand="lg">
            <Container fluid id={styles.navbar}>
                <Logo/>
                <NavbarBS.Toggle aria-controls="navbarScroll"/>
                <NavbarBS.Collapse id="navbarScroll" className="justify-content-end">
                    <Container className={"text-center"}>
                        {variant === "admin" ?
                            (
                                adminLinks.map((l, index) => {
                                    return <Link to={l.url} className={styles.adminLinks}
                                                 key={index}>{l.navbarText}</Link>
                                })
                            )
                            :
                            (
                                userLinks.map((l, index) => {
                                    return <Link to={l.url} className={styles.adminLinks}
                                                 key={index}>{l.navbarText}</Link>
                                })
                            )
                        }
                    </Container>
                    <ProfileDropdown/>
                </NavbarBS.Collapse>

            </Container>
            <Outlet/>

        </NavbarBS>
    );
};

export default ProfileNavbar;