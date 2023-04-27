import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import './Search.scss'

const Search = () => {
    return (
        <Container className={"search"}>
            <Form className="d-flex search-form">
                <input className={"search-input"} placeholder={"Search..."}/>
            </Form>
        </Container>
    )
}

export default Search