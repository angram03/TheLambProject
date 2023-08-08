import React from "react";
import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
import WelcomeGrid from "../WelcomeGrid/WelcomeGrid";
import Destinations from "../Destinations/Destinations";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Chatbot from "../ChatBot/ChatBot";

const WelcomePage = () => {
  return (
    <div>
      <Chatbot/>
      <Hero />
      <WelcomeGrid />
      <SearchBar />
      <Chatbot/>
      <Destinations/>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default WelcomePage;
