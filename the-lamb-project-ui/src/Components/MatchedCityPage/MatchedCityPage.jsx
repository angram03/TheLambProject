import React from "react";

import "./MatchedCityPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MatchedCityCard from "../MatchedCityCard/MatchedCityCard";

// import "../../Icons/accept.png";
const MatchedCityPage = ({ swiped, outOfFrame, lastDirection, formData }) => {
  const [cityCard, setCityCard] = useState("");
  console.log("The formdata is.. ");
  console.log(formData);

  useEffect(() => {
    console.log("calling useEffect");
    try {
      axios
        .post("http://localhost:3001/user/personal_preference", { formData })
        .then((response) => {
          setCityCard(response.data);
          console.log("response.data from matchedcity: ");
          console.log(response.data);
        });
    } catch (error) {
      // error handling, won't crash your code
      console.log("ERROR", error);
    }
    console.log("test");
  }, []);

  console.log("city page", cityCard);
  return (
    <div>
      {cityCard !== "" ? (
        <MatchedCityCard
          swiped={swiped}
          outOfFrame={outOfFrame}
          lastDirection={lastDirection}
          cityCard={cityCard}
        />
      ) : (
        "CityCard is empty"
      )}
    </div>
  );
};

export default MatchedCityPage;
