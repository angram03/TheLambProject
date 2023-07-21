import React from "react";
import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
import WelcomeGrid from "../WelcomeGrid/WelcomeGrid";
import Destinations from "../Destinations/Destinations";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

const WelcomePage = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <WelcomeGrid />
      <Destinations/>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default WelcomePage;
