import useEffectTitle from "../../../hooks/useEffectTitle";
import React, { useEffect, useState } from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import Header from "../../organisms/Header/Header";
import Categories from "./Categories/Categories";
import Footer from "../../organisms/Footer/Footer";
<<<<<<< HEAD
import {AuthContext} from "../../../context/AuthContext";

import TopVenues from './TopVenues/TopVenues';
import {getDataList} from "../../../services/AdminService/useAdminFetcher";
=======
import TopVenues from "./TopVenues/TopVenues";
import { getDataList } from "../../../services/AdminService/useAdminFetcher";

>>>>>>> d203394fd4c1f925fae501e866e18d4ccd22c7a4
const Home = () => {
    useEffectTitle("Home | Sportify")
    const [venues, setVenues] = useState("")
    const fetchData = async () => {
        try {
            const response = await getDataList("venuestop3");
            setVenues(response);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

  useEffectTitle("Home | Sportify");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <TopVenues venues={venues} />
      <Footer />
    </>
  );
};

export default Home;
