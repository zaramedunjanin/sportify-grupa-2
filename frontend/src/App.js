import React from 'react';
import axios from "axios";

import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";

const App = () => {
    function callPostMethod(){
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
        <>
            <Navbar/>
            <Header/>
        </>
    )
}

export default App