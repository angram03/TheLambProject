import UserPreference from "./Components/UserPreference/UserPreference";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import SearchBar from "./Components/SearchBar/SearchBar";
import WelcomeGrid from "./Components/WelcomeGrid/WelcomeGrid";
import ContactUs from "./Components/ContactUs/ContactUs";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import "./App.css";
import AboutPage from "./Components/AboutPage/AboutPage";
import RegisterCard from "./Components/RegisterCard/RegisterCard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import { useState } from "react";

const App = () => {
  const [appState, setAppState] = useState({});
  return (
    <div>
      {/* <Navbar/>
    <Hero/>
    <SearchBar/>
    <WelcomeGrid/>
    <ContactUs/> */}

      <div>
        <BrowserRouter>
          <Navbar />
          <Hero />
          <SearchBar />
          <WelcomeGrid />
          <ContactUs />

          <Routes>
            <Route path="/" element={<WelcomePage/>}/> 
             <Route path="/about" element={<AboutPage />} />
            <Route
              path="/login"
              element={<LoginForm setAppState={setAppState} />}
            />
            <Route
              path="/register"
              element={<RegisterCard setAppState={setAppState} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default App;
