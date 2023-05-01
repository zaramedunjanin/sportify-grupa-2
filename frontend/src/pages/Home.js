import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Header from "../components/Header/Header";
import Categories from "../components/Home/Categories";
import About from "../components/Home/About";
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Categories />
            <About />
            <Footer />
        </>
    )
}

export default Home