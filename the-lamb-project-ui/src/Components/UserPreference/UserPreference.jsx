import React from "react";
import { useState } from "react";
// import "./UserPreference.css";

const UserPreference = () => {
  const states = [
    { name: "Alabama", code: "AL" },
    { name: "Alaska", code: "AK" },
    { name: "Arizona", code: "AZ" },
    { name: "Arkansas", code: "AR" },
    { name: "California", code: "CA" },
    { name: "Colorado", code: "CO" },
    { name: "Connecticut", code: "CT" },
    { name: "Delaware", code: "DE" },
    { name: "Florida", code: "FL" },
    { name: "Georgia", code: "GA" },
    { name: "Hawaii", code: "HI" },
    { name: "Idaho", code: "ID" },
    { name: "Illinois", code: "IL" },
    { name: "Indiana", code: "IN" },
    { name: "Iowa", code: "IA" },
    { name: "Kansas", code: "KS" },
    { name: "Kentucky", code: "KY" },
    { name: "Louisiana", code: "LA" },
    { name: "Maine", code: "ME" },
    { name: "Maryland", code: "MD" },
    { name: "Massachusetts", code: "MA" },
    { name: "Michigan", code: "MI" },
    { name: "Minnesota", code: "MN" },
    { name: "Mississippi", code: "MS" },
    { name: "Missouri", code: "MO" },
    { name: "Montana", code: "MT" },
    { name: "Nebraska", code: "NE" },
    { name: "Nevada", code: "NV" },
    { name: "New Hampshire", code: "NH" },
    { name: "New Jersey", code: "NJ" },
    { name: "New Mexico", code: "NM" },
    { name: "New York", code: "NY" },
    { name: "North Carolina", code: "NC" },
    { name: "North Dakota", code: "ND" },
    { name: "Ohio", code: "OH" },
    { name: "Oklahoma", code: "OK" },
    { name: "Oregon", code: "OR" },
    { name: "Pennsylvania", code: "PA" },
    { name: "Rhode Island", code: "RI" },
    { name: "South Carolina", code: "SC" },
    { name: "South Dakota", code: "SD" },
    { name: "Tennessee", code: "TN" },
    { name: "Texas", code: "TX" },
    { name: "Utah", code: "UT" },
    { name: "Vermont", code: "VT" },
    { name: "Virginia", code: "VA" },
    { name: "Washington", code: "WA" },
    { name: "West Virginia", code: "WV" },
    { name: "Wisconsin", code: "WI" },
    { name: "Wyoming", code: "WY" },
  ];

  const [selectedState, setSelectedState] = useState([]);

  const handleChange = (e) => {
    setSelectedState(e.target.value);
  };

  const hobbies = [
    "Running",
    "Hiking",
    "Reading",
    "Coffee Tasting",
    "Improvisation",
    "Cycling",
    "Gardening",
    "Skiing",
    "Museum Visits",
    "Surfing",
    "Yoga",
    "Barbecue Grilling",
    "Dancing",
    "Photography",
    "Biking",
    "Ice Skating",
    "Painting",
    "Music Listening",
    "Outdoor Photography",
    "Board Games",
    "Theme Park Visits",
    "Cooking",
    "Knitting",
    "Writing",
    "Canoeing",
    "Beachcombing",
    "Snorkeling",
    "Picnicking",
    "Golfing",
    "Fishing",
    "Baking",
    "Chess",
    "Beer Brewing",
    "Brewery Tours",
  ];

  const industry = [
    "Physician",
    "Software",
    "Teachers",
    "Fashion",
    "Culinary",
    "Social_Work",
  ];

  const [selectedIndustry, setSelectedIndustry] = useState([]);

  const handleChangeIndustry = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const seasonalWeather = [
    "warm winter ❄️🌞",
    "cold winter ❄️🥶",
    "warm spring 🌷🌱🌞",
    "cold spring 🌷🌱🥶",
    "warm summer 👙🏄🌞",
    "cold summer 👙🏄🥶",
    "warm autumn 🍂🍁🌞",
    "cold autumn 🍂🍁🥶",
  ];

  return (
    <div className="userpref-container">
      <div className="state-dropdown">
        <h1>Pick your state of choice.</h1>
        <h2>Remember there are 50 states! You have a lot of options.</h2>
        <select value={selectedState} onChange={handleChange}>
          <option value="">Select a state</option>
          {states.map((state) => (
            <option key={state.code} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
        <p>Selected state: {selectedState}</p>
      </div>
      <div className="space"></div>

      {/* //hobbies checklist */}
      <div className="checkList">
        <h1>What is your favorite hobby?</h1>
        <div className="title">
          <h1>Hobbies</h1>
        </div>
        <div className="list-container">
          {hobbies.map((item, index) => (
            <div key={index}>
              <input type="checkbox" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space"></div>

      <div className="industry-dropdown">
        <h1>What industry are you in?</h1>
        <select value={selectedIndustry} onChange={handleChangeIndustry}>
          <option value="">Select your Industry</option>
          {industry.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
        <p>Selected industry: {selectedIndustry}</p>
      </div>

      <div className="space"></div>

      <div className="checkList-weather">
        <h1>What kind of weather do you enjoy the most?</h1>
        <div className="list-container2">
          {seasonalWeather.map((item, index) => (
            <div key={index}>
              <input type="checkbox" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPreference;
