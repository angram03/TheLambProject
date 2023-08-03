import React, { useState } from "react";
import "./MatchedCityList.css";
import { Link } from "react-router-dom";
import { abbrState } from "./StatesConvert.js";

const MatchedCitiesList = ({ cities, changeValue }) => {
  const [updatedCities, setUpdatedCities] = useState(cities);
  console.log(updatedCities);

  console.log(abbrState);
  console.log(abbrState("New York", "abbr"));
  // console.log(abbrState("ny", "name"));
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
            <Link to={`../moreinformation/${city.city}`}>
              <p className="ml-7 mt-2">{city.city}</p>
            </Link>
            <div className="flex flex-row">
              <div>
                <Link
                  target="_blank"
                  to={`https://www.zillow.com/${city.city.toLowerCase()}-${abbrState(
                    city.state,
                    "abbr"
                  )}/#/`}
                >
                  <p className="text-base flex flex-row">
                    <svg
                      role="img"
                      height="1rem"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Zillow</title>
                      <path d="M12.006 0L1.086 8.627v3.868c3.386-2.013 11.219-5.13 14.763-6.015.11-.024.16.005.227.078.372.427 1.586 1.899 1.916 2.301a.128.128 0 0 1-.03.195 43.607 43.607 0 0 0-6.67 6.527c-.03.037-.006.043.012.03 2.642-1.134 8.828-2.94 11.622-3.452V8.627zm-.48 11.177c-2.136.708-8.195 3.307-10.452 4.576V24h21.852v-7.936c-2.99.506-11.902 3.16-15.959 5.246a.183.183 0 0 1-.23-.036l-2.044-2.429c-.055-.061-.062-.098.011-.208 1.574-2.3 4.789-5.899 6.833-7.418.042-.03.031-.06-.012-.042Z" />
                    </svg>
                    Zillow
                  </p>
                </Link>
                <Link
                  target="_blank"
                  to={`https://www.airbnb.com/${city.city.toLowerCase()}-${abbrState(
                    city.state,
                    "abbr"
                  )}/stays`}
                >
                  <p className="text-base flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z" />
                      Aribnb
                    </svg>
                    Airbnb
                  </p>
                </Link>
              </div>

              <button
                onClick={() => handleDelete(city)}
                onMouseDown={() => changeValue(city)}
                className="  bg-transparent hover:bg-[#FF0000] text-red-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded text-2xl"
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchedCitiesList;
