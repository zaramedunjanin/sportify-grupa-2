import React from "react";
import Home from "./components/pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrequentlyAskedQuestions from './components/pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Signup from "./components/pages/Signup/SignupPage";
import LoginPage from "./components/pages/Login/LoginPage";
import Admin from "./components/pages/Admin/Admin";
import AdminPages from "./components/pages/Admin/AdminPages/AdminPages";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="faq" element={<FrequentlyAskedQuestions />} />

                <Route path="login" element={<LoginPage/>}/>
                <Route path="signup" element={<Signup/>}/>

                <Route path="admin" element={<Admin/>} >
                    <Route path="tables">
                        <Route path="users" element={<AdminPages text ={"users"}/>}/>
                    </Route>
                    <Route path="verification" element={<AdminPages text ={"companyve"}/>}/>
                    <Route path="statistics" element={<AdminPages text ={"statistics"}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );

};

export default App;
