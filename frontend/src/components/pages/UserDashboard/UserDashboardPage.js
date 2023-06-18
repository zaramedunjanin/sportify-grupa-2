import React, {useContext} from "react";

import UserDashboard from "./UserDashboard";
import Navbar from "../../organisms/Navbar/Navbar";
import TablePage from "./UserDataPage/TablePage";
import useEffectTitle from "../../../hooks/useEffectTitle";
<<<<<<< HEAD
import Footer from "../../organisms/Footer/Footer";
import {AuthContext} from "../../../context/AuthContext";

const UserDashboardPage = () => {
    useEffectTitle(`Profile | Sportify`);
    const userDashboardBgStyle = {
        backgroundColor: "whitesmoke",
        minHeight: "100vh"
    }
=======

const UserDashboardPage = () => {
    useEffectTitle("User dashboard | Sportify")
>>>>>>> d203394fd4c1f925fae501e866e18d4ccd22c7a4
  return (
      <div style={userDashboardBgStyle} >
      <Navbar variant={"user"} />
      <UserDashboard />
      <TablePage />
      <Footer/>
    </div>
  );
};

export default UserDashboardPage;
