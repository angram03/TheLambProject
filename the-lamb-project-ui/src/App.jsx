import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import SearchBar from "./Components/SearchBar/SearchBar";
import WelcomeGrid from "./Components/WelcomeGrid/WelcomeGrid";
import ContactUs from "./Components/ContactUs/ContactUs";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import "./App.css";
import AboutPage from "./Components/AboutPage/AboutPage";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import RegisterCard from "./Components/RegisterCard/RegisterCard";
import LoginForm from "./Components/LoginForm/LoginForm";
import UserPreference from "./Components/UserPreference/UserPreference";
import axios from "axios";


const App = () => {
  const [appState, setAppState] = useState({});

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/about" element={<AboutPage />} exact />
              <Route
              path="/login"
              element={<LoginForm setAppState={setAppState} />}
            />
            <Route
              path="/register"
              element={<RegisterCard setAppState={setAppState} />}
            />
            <Route
              path="/userpreferences"
              element={<UserPreference setAppState={setAppState} />}
            />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
