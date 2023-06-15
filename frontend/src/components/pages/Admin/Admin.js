import React from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import useEffectTitle from "../../../hooks/useEffectTitle";

const Admin = () => {
  useEffectTitle(`Admin | Sportify`);
    const adminBgStyle = {
        backgroundColor: "ghostwhite",
        minHeight: "100vh"
    }
  return (
    <div style={adminBgStyle}>
      <Navbar variant={"admin"} />
      <Outlet />
    </div>
  );
};

export default Admin;
