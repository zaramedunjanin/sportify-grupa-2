import React from 'react';

import Container from 'react-bootstrap/Container';

import './Header.scss';

import Search from '../Search/Search';
const Header = () => {
    return (
        <Container fluid className={"header-container background-green"}>
            <h2>Search, Rent, Play!</h2>
            <Search/>

            <div className="custom-shape-divider-bottom-1682524239">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                        className="shape-fill"></path>
                </svg>
            </div>


        </Container>

    )
}

export default Header