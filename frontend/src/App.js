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
import CompanyOwnerDashboard from "./components/pages/CompanyOwnerDashboard/CompanyOwnerDashboard";
import OwnerVenue from "./components/pages/CompanyOwnerDashboard/Venue/OwnerVenue";
import About from "./components/pages/About/About";
import { SearchProvider } from "./context/SearchContext";
import { CategoryProvider } from "./context/CategoryContext";
import Booking from "./components/pages/CompanyOwnerDashboard/Booking/Booking";
import { AuthProvider } from "./context/AuthContext";
import ContextWrapper from "./context/ContextWrapper";
import BecomeAPartnerPage from "./components/pages/BecomeAPartner/BecomeAPartnerPage";
import TermsOfUse from "./components/pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import PrivateRoute from "./utils/PrivateRoute";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <Routes>
          <Route index element={<Home />} />
          <Route path="faq" element={<FrequentlyAskedQuestions />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="bap" element={<BecomeAPartnerPage />} />
          <Route path="termsofuse" element={<TermsOfUse />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="/venue/:id" element={<Venue />} />
          <Route
            path="/userdashboard"
            element={
              <PrivateRoute expectedRoles={[1,2,3]}>
                <UserDashboardPage />
              </PrivateRoute>
            }
          />
          <Route path="/search" element={<SearchResults />} />
          <Route path="administrator" element={
            <PrivateRoute expectedRoles={[1,2,3]}>
              <Admin />
            </PrivateRoute>
          }>
            <Route path="" element={<Navigate to="tables/users" replace />} />
            <Route path="tables" element={<RootTablePage />}>
              <Route path="users" element={<TablePage />} />
              <Route path="venues" element={<TablePage />} />
              <Route path="sports" element={<TablePage />} />
              <Route path="reservations" element={<TablePage />} />
              <Route path="acceptedinvites" element={<TablePage />} />
              <Route path="questions" element={<TablePage />} />
              <Route path="ratings" element={<TablePage />} />
            </Route>
            <Route path="verification" element={<TablePage />} />

          </Route>

          <Route
            path="company"
            element={
              <PrivateRoute expectedRoles={[1,2,3]}>
                <CompanyOwnerDashboard />
              </PrivateRoute>
            }
          >
            <Route path="" element={
              <PrivateRoute expectedRoles={[1,2,3]}>
              <OwnerVenue />
            </PrivateRoute>} />
            <Route path="venues" element={
              <PrivateRoute expectedRoles={[1,2,3]}>
                <OwnerVenue />
              </PrivateRoute>
              } />
            <Route path="bookings" element={
              <PrivateRoute expectedRoles={[1,2,3]}>
                <Booking />
              </PrivateRoute>
              } />
          </Route>
        </Routes>
      </ContextWrapper>
    </BrowserRouter>
  );
};

export default App;
