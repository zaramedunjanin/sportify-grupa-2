import React from "react";
import Home from "./components/pages/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./components/pages/Signup/SignupPage";
import LoginPage from "./components/pages/Login/LoginPage";

import Admin from "./components/pages/Admin/Admin";
import AdminUsers from "./components/pages/Admin/AdminPages/AdminUsers";
import AdminFacilities from "./components/pages/Admin/AdminPages/AdminFacilities";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="signup" element={<Signup/>}/>

                <Route path="admin" element={<Admin/>} >
                    <Route path="users" element={<AdminUsers/>}/>
                    <Route path="facilities" element={<AdminFacilities/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
