import React, { useState } from "react";
import "./MatchedCityList.css";
const MatchedCitiesList = ({ cities, changeValue }) => {
  const [updatedCities, setUpdatedCities] = useState(cities);
  console.log(updatedCities);
  const handleDelete = (city) => {
    console.log(city);
    const newList = updatedCities.filter((item) => item !== city);
    setUpdatedCities(newList);
    console.log(updatedCities);
    // setUpdatedCities()
  };

  return (
    <div className="container">
      {updatedCities.map((city) => {
        return (
          <div className="my-6 city flex flex-row justify-between border border-blue-500">
            <p className="ml-7 mt-2">{city}</p>
            <button
              onClick={() => handleDelete(city)}
              onMouseDown={() => changeValue(city)}
              className="  bg-transparent hover:bg-[#FF0000] text-red-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded text-2xl"
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MatchedCitiesList;
