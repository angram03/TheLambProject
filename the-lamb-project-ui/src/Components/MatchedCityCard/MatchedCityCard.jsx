import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./MatchedCityCard.css";
import axios from "axios";

const MatchedCityCard = ({
  swiped,
  outOfFrame,
  formData,
  lastDirection,
  cityCard,
  swipe,
}) => {
  console.log("FORM DATA", formData);
  console.log("Citycaard");
  console.log(cityCard);
  const [preferedCitiesList, setPreferedCitiesList] = useState([]);
  const [empty, setEmpty] = useState(false);
  // const reverseCard = cityCard.reverse
  const characters = cityCard;
  const [houseVisible, setHouseVisible] = useState(true);
  const [culinary, setCulinary] = useState(false);
  const [fashion, setFashion] = useState(false);
  const [physician, setPhysician] = useState(false);
  const [socialWork, setSocialWork] = useState(false);
  const [software, setSoftware] = useState(false);
  const [teachers, setTeachers] = useState(false);

  const preferences = (object) => {
    for (let i = 0; i <= formData.lenght; i++) {
      let preferedIndustry = "";
      let industry = formData.industry;
      if (object.industry === true) {
        preferedIndustry = industry;
      }
    }
  };

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
                className="swipe"
                key={index}
                onSwipe={(dir) =>
                  swiped(dir, character.city, index, cityCard, houseVisible)
                }
                onCardLeftScreen={() => outOfFrame(character.city)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.images + ")" }}
                  className="card"
                >
                  <h3 className="NameTag">
                    <center>{character.city + ", " + character.state}</center>
                  </h3>
                  <h4 flex items-start>
                    <center>{character.hobby}</center>
                    <center>{<preferences object={character} />}</center>
                  </h4>
                </div>
              </TinderCard>
            </>
          ))}
      </div>
      <div className="tinder--buttons content-center	">
        <button id="nope" className="nope"></button>
        <button id="love">
          <i className="fa fa-heart heart"></i>
        </button>
      </div>
      <button onClick={() => swipe("left", cityCard)}>Left</button>
      <button onClick={() => swipe("right", cityCard)}>Right</button>
    </div>
  );
};

export default MatchedCityCard;
