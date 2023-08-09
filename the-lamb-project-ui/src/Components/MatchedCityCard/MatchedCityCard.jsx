import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./MatchedCityCard.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MatchedCityCard = ({
  swiped,
  outOfFrame,
  formData,
  lastDirection,
  cityCard,
  swipe,
  // ref,
  childRefs,
}) => {
  console.log("FORM DATA", formData);
  console.log("Citycaard");
  console.log(cityCard);
  const [preferedCitiesList, setPreferedCitiesList] = useState([]);
  const [empty, setEmpty] = useState(false);
  // const reverseCard = cityCard.reverse
  const characters = cityCard;
  const [houseVisible, setHouseVisible] = useState(true);
  // const { city } = useParams();

  // const preferences = (object) => {
  //   for (let i = 0; i <= formData.lenght; i++) {
  //     let preferedIndustry = "";
  //     let industry = formData.industry;
  //     if (object.industry === true) {
  //       preferedIndustry = industry;

  //     }
  //   }
  // };

  // const [updatedCities, setUpdatedCities] = useState(INITIAL_FORM_DATA);

  //Ask angelica to put important on the user preference.

  // con
  // const mycities = ()=>{
  //   if(preference == characters.pers_preference.state){
  //     return(

  //     )
  //   }
  // }

  return (
    <div className="MatchedCityCardBg">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <div className="line"></div>
      {/* <h1 className="label">
        <center>Matched Cities</center>
      </h1> */}
      <div className="cardContainer">
        {characters.pers_preference
          .slice()
          .reverse()
          .map((character, index) => (
            <>
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={index}
                onSwipe={(dir) =>
                  swiped(dir, character, index, cityCard, houseVisible)
                }
                onCardLeftScreen={() => outOfFrame(character.city)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.images + ")" }}
                  className="card"
                >
                  <Link to={`/moreinformation/${character.city}`}>
                    <h3 className="NameTag ">
                      <center>{character.city + ", " + character.state}</center>
                    </h3>
                  </Link>

                  {/* <h4 flex items-stpart> */}
                  {/* <center>{character.hobby && formData.hobby}</center>
                    <center>
                      {character[formData.industry.toLowerCase()] &&
                        formData.industry}
                    </center> */}
                  {/* </h4> */}
                </div>
              </TinderCard>
            </>
          ))}
      </div>

      <br></br>
      <div className="flex items-center justify-center">
        <button
          className="rounded-full bg-white-500 hover:bg-red-500 text-white"
          onClick={() => swipe("left", cityCard)}
        >
          <svg
            class="h-12 w-12 text-red-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="pr-4"></div>

        <button
          className="rounded-full bg-white-500 hover:bg-green-500 text-white"
          onClick={() => swipe("right", cityCard)}
        >
          <svg
            class="h-12 w-12 text-green-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      {/* 
      <center>
        <button className="border-solid border-2 border-sky-500">
          More Info
        </button>
      </center> */}
      <center>
        <p className="bg-[#044389] text-[#E4FAEE]">
          Cities are ordered in priority of state, occupation, hobby, and temperature
        </p>
        <p className="bg-[#F2BB05] text-[#E4FAEE]">
          To save a city, swipe right. To reject, swipe left.
        </p>
        <p className="bg-[#015239] text-[#E4FAEE]">
          Click on the city name to view more information
        </p>
      </center>
    </div>
  );
};

export default MatchedCityCard;
