import React from "react";
import { useState } from "react";


const WeatherInfo = () => {
  const seasonalWeather = [
    " warm winter ❄️🌞",
    " cold winter ❄️🥶",
    " warm spring 🌷🌱🌞",
    " cold spring 🌷🌱🥶",
    " warm summer 👙🏄🌞",
    " cold summer 👙🏄🥶",
    " warm autumn 🍂🍁🌞",
    " cold autumn 🍂🍁🥶",
  ];

  return (
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
  );
};

export default WeatherInfo;
