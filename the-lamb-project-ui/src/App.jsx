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
import UserPreference from "./Components/UserPreferenceForm/UserPreferenceForm";
import MatchedCityPage from "./Components/MatchedCityPage/MatchedCityPage";
import MatchedCitiesList from "./Components/MatchedCityList/MatchedCityList";
import CityScores from "./Components/CityScores/CityScores";
import Weather from "./Components/Weather/Weather";

const App = () => {
  const [appState, setAppState] = useState({});

  const [likedCityCount, setLikedCityCount] = useState(0);
  const [number, setNumber] = useState(1);
  const [lastDirection, setLastDirection] = useState();
  const [cities, setCities] = useState([]);
  const [citiesSize, setCitiesSize] = useState(0);
  const [allCities, setAllCities] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [inCardMatched, setInCardMatched] = useState(false);
  // const currentIndexRef = useRef(currentIndex)
  // const childRefs = 0;

  const swipe = async (dir) => {
    // await
    // console.log(childRefs[0]);

    console.log(currentIndex);
    console.log("CURRENT INDEX", currentIndex);
    console.log(dir);
  };

  const swiped = (
    direction,
    nameToDelete,
    index,
    pers_preference,
    houseVisible
  ) => {
    console.log("APP.JSX", pers_preference.pers_preference.length);
    setIndex(index + 1);
    setCurrentIndex(pers_preference.pers_preference.length);
    console.log("HOUSE VISIBLE", houseVisible);
    setInCardMatched(houseVisible);
    setAllCities([...allCities, nameToDelete]);
    console.log("allCitites", allCities);
    console.log("removing:" + nameToDelete);
    console.log(index);

    if (direction == "right") {
      setNumber(number + 1);
      setCities([...cities, nameToDelete]);
      setCitiesSize(cities.length);
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

  const [formData, setFormData] = useState({
    state: "",
    industry: "",
    hobbies: "",
    weather: "",
  });
  const changeValue = (city) => {
    console.log("BIG CITY", city);
    setCitiesSize(citiesSize - 1);

    // const newList = cities.filter((item) => item !== city);
    // setCities(newList);
  };

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar
            likedCityCount={likedCityCount}
            citiesSize={citiesSize}
            inCardMatched={inCardMatched}
          />
          <div>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/about" element={<AboutPage />} exact />

              <Route
                path="/matchedcity"
                element={
                  <MatchedCityPage
                    swipe={swipe}
                    swiped={swiped}
                    outOfFrame={outOfFrame}
                    lastDirection={lastDirection}
                    formData={formData}
                    inCardMatched={inCardMatched}
                  />
                }
              />
              <Route
                path="/matchedcitieslist"
                element={
                  <MatchedCitiesList
                    cities={cities}
                    changeValue={changeValue}
                  />
                }
              />
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
                element={
                  <UserPreference
                    swipe={swipe}
                    swiped={swiped}
                    outOfFrame={outOfFrame}
                    lastDirection={lastDirection}
                    setAppState={setAppState}
                    setFormData={setFormData}
                    formData={formData}
                  />
                }
              />
              <Route path="/cityscores" element={<CityScores/>}/>
              <Route path="/weather" element={<Weather/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
