import React from 'react';
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import './Search.scss'

import basketball from '../../../assets/images/basketball_search.png';

const Search = () => {
    function callPostMethod() {
        axios.post("https://127.0.0.1:8000/", {
            firstName: 'Ime',
            lastName: 'Prezime',
        }).then((response) => {
            console.log(response)
        },
            (error) => {
                console.log(error)
            })
    }
    return (
        <Container className={"search"}>
            <Form className="d-flex search-form">
                <div className={"input-container"}>
                    <input className={"search-input"} placeholder={"Search..."} />
                    <button className={"search-button"} type={"submit"}>
                        <img src={basketball} className="search-img" />
                    </button>
                </div>
            </Form>
        </Container>
    )
}

export default Search