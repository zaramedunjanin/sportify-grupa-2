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
import About from "./components/pages/About/About";
import { SearchProvider } from "./context/SearchContext";
import { CategoryProvider } from "./context/CategoryContext";
import { AuthProvider } from "./context/AuthContext";
import ContextWrapper from "./context/ContextWrapper";
import BecomeAPartnerPage from "./components/pages/BecomeAPartner/BecomeAPartnerPage";
import TermsOfUse from "./components/pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="faq" element={<FrequentlyAskedQuestions />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="bap" element={<BecomeAPartnerPage />} />
            <Route path="termsofuse" element={<TermsOfUse />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<ContactUs />} />
            <PrivateRoute path="administrator" component={Admin}>
              <Route path="tables" element={<RootTablePage />} />
              <Route path="tables/users" element={<TablePage />} />
              <Route path="tables/venues" element={<TablePage />} />
              <Route path="tables/sports" element={<TablePage />} />
              <Route path="tables/reservations" element={<TablePage />} />
              <Route path="tables/acceptedinvites" element={<TablePage />} />
              <Route path="tables/questions" element={<TablePage />} />
              <Route path="tables/ratings" element={<TablePage />} />
              <Route path="verification" element={<TablePage />} />
            </PrivateRoute>
            <Route path="/venue/:id" element={<Venue />} />
            <Route path="/userdashboard" element={<UserDashboardPage />} />
            <Route path="/userdata" element={<UserData />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
};

export default App;
