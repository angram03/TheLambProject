import React from "react";
import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
import WelcomeGrid from "../WelcomeGrid/WelcomeGrid";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

const WelcomePage = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <WelcomeGrid />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default WelcomePage;
