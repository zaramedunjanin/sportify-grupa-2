import React from "react";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import FrequentlyAskedQuestions from './components/pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Signup from "./components/pages/Signup/SignupPage";
import LoginPage from "./components/pages/Login/LoginPage";
import SearchResult from "./components/pages/SearchResult/SearchResult";

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FrequentlyAskedQuestions />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/search" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
