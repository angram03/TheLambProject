import React from "react";
import {useState} from "react"
import StateInfo from "../UserPrefPages/StateInfo";
import HobbyInfo from "../UserPrefPages/HobbyInfo";
import Industry from "../UserPrefPages/Industry";
import WeatherInfo from "../UserPrefPages/WeatherInfo";


const UserPreferenceForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    state: [],
    industry: [],
    hobbies: [],
    weather: [],
  });

  const FormTitles = ["State", "Industry", "Hobbies", "Weather"];
  const PageDisplay = () => {
    if (page === 0) {
      return <StateInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Industry formData={formData} setFormData={setFormData} />;

    } else if (page === 2) {
      return <HobbyInfo formData={formData} setFormData={setFormData} />;
      
    }
    else {
      return <WeatherInfo formData={formData} setFormData={setFormData} />;
    }
  };


  
return (
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="flex space-x-4 ...">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
        </div>
    
  </div>

)
  
}

export default UserPreferenceForm
