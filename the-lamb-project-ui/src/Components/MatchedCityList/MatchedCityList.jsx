import React from "react";
import "./MatchedCityList.css";
const MatchedCitiesList = () => {
  return (
    <div className="container">
      <div className="my-6 city flex flex-row justify-between border border-blue-500">
        <p className="ml-7 mt-2">Linked city code</p>
        <button className=" mr-7 bg-transparent hover:bg-[#5995ED] text-blue-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded">
          Try Here
        </button>
      </div>
      <div className="my-6 city flex flex-row justify-between border border-blue-500">
        <p className="ml-7 mt-2">Linked city code</p>
        <button className="mr-7 bg-transparent hover:bg-[#5995ED] text-blue-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
          Try Here
        </button>
      </div>
      <div className="my-6 city flex flex-row justify-between border border-blue-500">
        <p className="ml-7 mt-2">Linked city code</p>
        <button className=" mr-7 bg-transparent hover:bg-[#5995ED] text-blue-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded">
          Try Here
        </button>
      </div>
      <div className="city flex flex-row justify-between border border-blue-500">
        <p className="ml-7 mt-2">Linked city code</p>
        <button className=" mr-7 bg-transparent hover:bg-[#5995ED] text-blue-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded">
          Try Here
        </button>
      </div>
    </div>
  );
};

export default MatchedCitiesList;
