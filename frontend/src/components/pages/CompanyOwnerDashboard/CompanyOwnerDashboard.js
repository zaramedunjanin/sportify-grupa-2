import { Outlet } from "react-router-dom";
import Navbar from "../../organisms/Navbar/Navbar";

const CompanyOwnerDashboard = () => {
  return (
    <>
      <Navbar variant="company"></Navbar>
      <Outlet />
    </>
  );
};

export default CompanyOwnerDashboard;
