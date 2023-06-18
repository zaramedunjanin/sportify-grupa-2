import { Outlet } from "react-router-dom";
import Navbar from "../../organisms/Navbar/Navbar";
import useEffectTitle from "../../../hooks/useEffectTitle";

const CompanyOwnerDashboard = () => {
  useEffectTitle(`Company | Sportify`);
  return (
    <>
      <Navbar variant="company"></Navbar>
      <Outlet />
    </>
  );
};

export default CompanyOwnerDashboard;
