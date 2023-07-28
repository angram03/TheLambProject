import React from "react";



const WeatherInfo = ({formData, setFormData}) => {
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
            <input type="checkbox" onChange={() => {setFormData({...formData, "weather": item})}} checked={item === formData.weather}  />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherInfo;

