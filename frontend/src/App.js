import React from "react";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrequentlyAskedQuestions from "./components/pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Signup from "./components/pages/Signup/SignupPage";
import LoginPage from "./components/pages/Login/LoginPage";
import SearchResults from "./components/pages/SearchResults/SearchResults";
import Admin from "./components/pages/Admin/Admin";
import TablePage from "./components/pages/Admin/AdminPages/TablePage";
import RootTablePage from "./components/pages/Admin/AdminPages/RootTablePage";
import Venue from "./components/pages/Venue/Venue";
import UserDashboardPage from "./components/pages/UserDashboard/UserDashboardPage";
import UserData from "./components/pages/UserDashboard/UserData/UserData";
import { SearchProvider } from "./components/molecules/Search/SearchContext";
import GeneralLayout from "./components/atoms/GeneralLayout/GeneralLayou";

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="faq" element={<FrequentlyAskedQuestions />} />

          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />

          <Route path="administrator" element={<Admin />}>
            <Route path="tables" element={<RootTablePage />}>
              <Route path="users" element={<TablePage />} />
              <Route path="venues" element={<TablePage />} />
              <Route path="sports" element={<TablePage />} />
              <Route path="reservations" element={<TablePage />} />
            </Route>
            <Route path="verification" element={<TablePage />} />
          </Route>

          <Route path="/venue/:id" element={<Venue />} />
          <Route path="/userdashboard" element={<UserDashboardPage />} />
          <Route path="/userdata" element={<UserData />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
};
export default App;
