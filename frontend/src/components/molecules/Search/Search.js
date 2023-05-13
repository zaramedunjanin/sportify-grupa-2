import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import './Search.scss'

import basketball from '../../../assets/images/basketball_search.png';

const Search = () => {

    return (
        <Container fluid className={"search"}>
            <Form className="d-flex search-form">
                <div className={"input-container"}>
                    <input className={"search-input"} placeholder={"Search..."}/>
                    <button className={"search-button"} type={"submit"}>
                        <img src={basketball} className="search-img"/>
                    </button>
                </div>
            </Form>
        </Container>
    )
}

export default Search