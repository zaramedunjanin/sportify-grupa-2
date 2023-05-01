import React from 'react';
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrequentlyAskedQuestions from './pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/faq" element={<FrequentlyAskedQuestions />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App