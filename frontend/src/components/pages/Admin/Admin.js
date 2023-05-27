import React from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import useEffectTitle from "../../../hooks/useEffectTitle";

const Admin = () => {
  useEffectTitle(`Admin | Sportify`);

  return (
    <>
      <Navbar variant={"admin"} />
      <Outlet />
    </>
  );
};

export default Admin;
