import React, {useContext} from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import Header from "../../organisms/Header/Header";
import Categories from "./Categories/Categories";
import Footer from "../../organisms/Footer/Footer";
import {AuthContext} from "../../../context/AuthContext";

const Home = () => {

    return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
