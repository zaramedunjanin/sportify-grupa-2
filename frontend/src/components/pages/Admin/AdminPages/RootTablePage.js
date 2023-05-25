import React from "react";

import {Outlet, Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import styles from "./RootTablePage.module.scss"

const RootTablePage = () => {

    return (
        <>
        <Container className={styles.tableLinkContainer}>
            <Link to={"users"} className={styles.tableLinks}>Users</Link>
            <Link to={"sports"} className={styles.tableLinks}>Sports</Link>
            <Link to={"venues"} className={styles.tableLinks}>Venues</Link>
            <Link to={"reservations"} className={styles.tableLinks}>Reservations</Link>
        </Container>

            <Outlet/>
        </>
    );
};

export default RootTablePage;