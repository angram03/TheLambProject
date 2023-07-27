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
import MatchedCityPage from "./Components/MatchedCityPage/MatchedCityPage";
import MatchedCitiesList from "./Components/MatchedCityList/MatchedCityList";
import MatchedCityListPage from "./Components/MatchedCityPage/MatchedCityPage";

const App = () => {
  const [appState, setAppState] = useState({});
  const [likedCityCount, setLikedCityCount] = useState(0);
  const [number, setNumber] = useState(1);
  const [lastDirection, setLastDirection] = useState();
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);

  const AcceptCity = (event) => {
    setLikedCityCount(likedCityCount + 1);
    console.log(likedCityCount);
    console.log("Accept");
  };
  const swiped = (direction, nameToDelete) => {
    setAllCities([...allCities, nameToDelete]);
    console.log("allCitites", allCities);
    console.log("removing:" + nameToDelete);

    if (direction == "right") {
      setNumber(number + 1);
      setCities([...cities, nameToDelete]);
    }
    if (direction == "down" || direction == "up") {
      restoreCard();
      preventSwipe(direction);
      //so I have the city name right, I want to try to put it back where it was,
      // how do I control that, when I swipe, how does the slide get out of the page.
    }
    console.log("Number", number);

    setLastDirection(direction);
  };
  console.log("Cities", cities);
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar likedCityCount={likedCityCount} />
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
              <Route
                path="/matchedcity"
                element={<MatchedCityPage AcceptCity={AcceptCity} />}
              />
              <Route
                path="/matchedcitieslist"
                element={<MatchedCitiesList />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
