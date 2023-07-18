
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"
import SearchBar from "./Components/SearchBar/SearchBar";
import WelcomeGrid from "./Components/WelcomeGrid/WelcomeGrid";
import ContactUs from "./Components/ContactUs/ContactUs"
import WelcomePage from "./Components/WelcomePage/WelcomePage"
import './App.css'
import AboutPage from "./Components/AboutPage/AboutPage";
import {Link} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom";









const App = () => {
  return (
  <div>

  
    <Navbar/>
    <Hero/>
    <SearchBar/>
    <WelcomeGrid/>
    <ContactUs/>


    <div>


    <BrowserRouter>




        <Routes>
          {/* <Route path="/" element={<WelcomePage/>}/> */}
          <Route path = "/about" element={<AboutPage/>}/>
          
        </Routes>
        </BrowserRouter>

    </div>
    

  </div>);
};
export default App;

