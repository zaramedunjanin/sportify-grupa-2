import React from 'react';

import Container from 'react-bootstrap/Container';
import NavbarBS from 'react-bootstrap/Navbar';

import '../Navbar/Navbar.scss';

import Logo from '../Navbar/Logo';
const NavbarLogin = () => {
    return (
        <NavbarBS className="background-green" id = "navbar" expand="lg" >
            <Container fluid>
                <NavbarBS.Brand href="#"><Logo/></NavbarBS.Brand>
            </Container>
        </NavbarBS>
    )
}

export default NavbarLogin