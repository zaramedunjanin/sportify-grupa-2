import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Categories from "../components/Home/Categories";
import About from "../components/Home/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <About />
    </>
  );
};

export default Home;
