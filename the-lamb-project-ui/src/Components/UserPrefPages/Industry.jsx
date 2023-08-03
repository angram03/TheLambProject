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
        <h1 className="font-heavy">What industry are you in?</h1>
        <br />
        <select className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" value={formData.industry} onChange={handleChangeIndustry}>
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
