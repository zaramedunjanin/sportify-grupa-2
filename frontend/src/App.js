import React from "react";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrequentlyAskedQuestions from "./components/pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Signup from "./components/pages/Signup/SignupPage";
import LoginPage from "./components/pages/Login/LoginPage";
import Venue from "./components/pages/Venue/Venue";
import UserDashboardPage from "./components/pages/UserDashboard/UserDashboardPage";
import UserData from "./components/pages/UserDashboard/UserData/UserData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FrequentlyAskedQuestions />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/venue/:id" element={<Venue />} />

        <Route path="/userdashboard" element={<UserDashboardPage />} />
        <Route path="/userdata" element={<UserData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
