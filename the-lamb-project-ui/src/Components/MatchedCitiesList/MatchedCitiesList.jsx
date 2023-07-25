import React from "react";

const MatchedCitiesList = ({ likedCityCount }) => {
  return (
    <div>
      <div>
        {likedCityCount.map((city) => (
          <p>{city}</p>
        ))}
      </div>
    </div>
  );
};

export default MatchedCitiesList;
