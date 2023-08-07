import React, { useState } from "react";
import StateInfo from "../UserPrefPages/StateInfo";
import HobbyInfo from "../UserPrefPages/HobbyInfo";
import Industry from "../UserPrefPages/Industry";
import WeatherInfo from "../UserPrefPages/WeatherInfo";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [formData, setFormData] = useState({
    state: "",
    industry: "",
    hobbies: "",
    weather: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Here, you can handle form submission for the settings
    // For example, you can update the user's preferences in the backend
    // and then show the success message
    // For demonstration purposes, we are just showing the message here
    setShowSuccessMessage(true);

    // Simulate success message disappearance after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-[#044389]">
            Settings
          </h1>
        </div>
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8">
          <StateInfo formData={formData} setFormData={setFormData} />
          <HobbyInfo formData={formData} setFormData={setFormData} />
          <Industry formData={formData} setFormData={setFormData} />
          <WeatherInfo formData={formData} setFormData={setFormData} />
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
              onClick={handleSubmit}
            >
              Save Settings
            </button>
          </div>
          {showSuccessMessage && (
            <div className="mt-4 text-center text-green-600">
              Settings saved successfully
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
