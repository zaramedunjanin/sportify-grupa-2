import React from "react";

import Container from "react-bootstrap/Container";
import NavbarBS from "react-bootstrap/Navbar";

import styles from "./Navbar.module.scss";

import Button from "../../atoms/Buttons/MainButton/MainButton";
import Search from "../../molecules/Search/Search";
import ProfileDropdown from "../../molecules/Dropdown/ProfileDropdown/ProfileDropdown"

import Logo from "./Logo";
import {useNavigate} from "react-router-dom";

const Navbar = ({
                    variant = "default",
                    ...props
                }) => {

    let isAuth = false;

    const navigate = useNavigate();

    return (
        <NavbarBS className={"background-green"} expand="lg">
            <Container fluid id={styles.navbar}>
                <Logo/>
                <NavbarBS.Toggle aria-controls="navbarScroll"/>
                {variant === "search" ?
                    <div className={styles.navSearch}>
                        <Search/>
                    </div>
                    : null
                }
                <NavbarBS.Collapse id="navbarScroll" className="justify-content-end">

                    {isAuth === true ?
                        <ProfileDropdown/>
                        :
                        <div className={styles.navButtons}>
                            <Button text={"Log in"} onClick={() => navigate("/login")}/>
                            <Button text={"Sign up"} onClick={() => navigate("/signup")}/>
                        </div>
                    }
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    );
};

export default Navbar;
