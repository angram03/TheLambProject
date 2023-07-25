import React from "react";
import { useState } from "react";
const Industry = () => {
  const industry = [
    "Physician",
    "Software",
    "Teachers",
    "Fashion",
    "Culinary",
    "Social Work",
  ];
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const handleChangeIndustry = (e) => {
    setSelectedIndustry(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
};

export default Industry;
