import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./MatchedCityCard.css";
import axios from "axios";


const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Erlich Bachman",
    url: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Monica Hall",
    url: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Jared Dunn",
    url: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  },
];

const MatchedCityCard = ({ swiped, outOfFrame, lastDirection, cityCard }) => {
  console.log("Citycaard");
  console.log(cityCard);
  const [preferedCitiesList, setPreferedCitiesList] = useState([]);
  const [empty, setEmpty] = useState(false);
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
        {characters.pers_preference.map((character) => (
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
                <center>{character.state}</center>
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="tinder--buttons content-center	">
        <button id="nope" className="nope">
          <i className="fa fa-remove"></i>
        </button>
        <button id="love">
          <i className="fa fa-heart heart"></i>
        </button>
      </div>
    </div>
  );
};

export default MatchedCityCard;
