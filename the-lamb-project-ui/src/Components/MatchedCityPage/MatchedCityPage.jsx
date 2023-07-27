import React from "react";
import "./MatchedCityPage.css";
import MatchedCityCard from "../MatchedCityCard/MatchedCityCard";
// import "../../Icons/accept.png";
const MatchedCityPage = ({ AcceptCity, swiped, outOfFrame, lastDirection }) => {
  // const RejectCity = (event) => {
  //   console.log("Reject");
  // };

  return (
    <div>
      <MatchedCityCard
        AcceptCity={AcceptCity}
        swiped={swiped}
        outOfFrame={outOfFrame}
        lastDirection={lastDirection}
      />
    </div>
  );
};

export default MatchedCityPage;
