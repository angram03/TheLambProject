import React from "react";
import "./MatchedCityPage.css";
import MatchedCityCard from "../MatchedCityCard/MatchedCityCard";
// import "../../Icons/accept.png";
const MatchedCityPage = ({ AcceptCity }) => {
  // const RejectCity = (event) => {
  //   console.log("Reject");
  // };
  return (
    <div>
      <MatchedCityCard AcceptCity={AcceptCity} />
    </div>
  );
};

export default MatchedCityPage;
