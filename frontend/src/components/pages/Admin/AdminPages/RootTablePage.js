import React from "react";

import {Outlet, Link} from "react-router-dom";
import {Container} from "react-bootstrap";


const RootTablePage = () => {

    return (
        <>
        <Container>
            <Link to={"users"}>Users</Link>
            <Link to={"sports"}>Sports</Link>
            <Link to={"venues"}>Venues</Link>
            <Link to={"reservations"}>Reservations</Link>
        </Container>

            <Outlet/>
        </>
    );
};

export default RootTablePage;
