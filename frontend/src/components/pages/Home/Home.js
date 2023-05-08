import React from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Header from "../../organisms/Header/Header";
import Categories from "./Categories/Categories";
import About from "./About/About";
import Footer from "../../organisms/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <About />
      <Footer />
    </>
  );
};

export default Home;
