import React from 'react';

import './Categories.scss';

import Card from "./CategoryCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Categories = () => {
    return (
        <Container>
            <Row className={"mt-4 mb-1"}>
                <h2>Popular Sports</h2>
            </Row>
            <Row className={"text-center"}>
                <Col xs={6} md={4} lg={2}><Card icon={"sports_soccer"} text={"Football"} /></Col>
                <Col xs={6} md={4} lg={2}><Card icon={"sports_tennis"} text={"Tennis"} /></Col>
                <Col xs={6} md={4} lg={2}><Card icon={"sports_volleyball"} text={"Volleyball"} /></Col>
                <Col xs={6} md={4} lg={2}><Card icon={"sports_basketball"} text={"Basketball"} /></Col>
                <Col xs={6} md={4} lg={2}><Card icon={"ice_skating"} text={"Ice Skating"} /></Col>
                <Col xs={6} md={4} lg={2}><Card icon={"pool"} text={"Swimming"} /></Col>
            </Row>
        </Container>
    )
}

export default Categories