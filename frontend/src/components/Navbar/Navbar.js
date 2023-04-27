import React from 'react';

import Container from 'react-bootstrap/Container';
import NavbarBS from 'react-bootstrap/Navbar';

import './Navbar.scss';

import Button from '../../components/Buttons/MainButton';
import Logo from './Logo';

const Navbar = () => {
    return (
        <NavbarBS className="background-green" expand="lg">
            <Container fluid>
                <NavbarBS.Brand href="#"><Logo/></NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="navbarScroll" />
                <NavbarBS.Collapse id="navbarScroll" className="justify-content-end">
                   <Button text={"Sign in"}/>
                    <Button text={"Sign up"}/>

                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    )
}

export default Navbar