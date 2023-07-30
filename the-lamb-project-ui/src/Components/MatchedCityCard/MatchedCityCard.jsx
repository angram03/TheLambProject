import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./MatchedCityCard.css";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";

const MatchedCityCard = ({
  swiped,
  outOfFrame,
  lastDirection,
  cityCard,
  swipe,
}) => {
  console.log("Citycaard");
  console.log(cityCard);
  const [preferedCitiesList, setPreferedCitiesList] = useState([]);
  const [empty, setEmpty] = useState(false);
  // const reverseCard = cityCard.reverse
  const characters = cityCard;

  //Ask angelica to put important on the user preference.

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
          .map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.state)}
              onCardLeftScreen={() => outOfFrame(character.state)}
            >
              <div
                style={{ backgroundImage: "url(" + character.images + ")" }}
                className="card"
              >
                <h3 className="NameTag">
                  <center>{character.city + ", " + character.state} </center>
                </h3>
              </div>
            </TinderCard>
          ))}
      </div>
      <div className="tinder--buttons content-center	">
        <button onClick={() => swipe("left")} id="nope" className="nope">
          <i className="fa fa-remove"></i>
        </button>
        <button onClick={() => swipe("right")} id="love">
          <i className="fa fa-heart heart"></i>
        </button>
      </div>
    </div>
  );
};

export default MatchedCityCard;
