import React from "react";

const Industry = ({formData, setFormData}) => {
  const industry = [
    "Physician",
    "Software",
    "Teachers",
    "Fashion",
    "Culinary",
    "Social Work",
  ];
 
  const handleChangeIndustry = (e) => {
    setFormData({...formData, "industry": e.target.value})
  };

  return (
    <div>
      <div className="industry-dropdown">
        <h1>What industry are you in?</h1>
        <select value={formData.industry} onChange={handleChangeIndustry}>
          <option value="">Select your Industry</option>
          {industry.map((industry) => (
            <option key={industry} value={industry} onChange={handleChangeIndustry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Industry;
