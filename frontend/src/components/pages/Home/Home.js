import React from "react";
import useEffectTitle from "../../../hooks/useEffectTitle";
import Navbar from "../../organisms/Navbar/Navbar";
import Header from "../../organisms/Header/Header";
import Categories from "./Categories/Categories";
import Footer from "../../organisms/Footer/Footer";

const Home = () => {
    useEffectTitle("Home | Sportify")
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
