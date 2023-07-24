import React from "react";
import { useState } from "react";


const HobbyInfo = () => {


  const hobbies = [
    " Running",
    " Hiking",
    " Reading",
    " Coffee Tasting",
    " Improvisation",
    " Cycling",
    " Gardening",
    " Skiing",
    " Museum Visits",
    " Surfing",
    " Yoga",
    " Barbecue Grilling",
    " Dancing",
    " Photography",
    " Biking",
    " Ice Skating",
    " Painting",
    " Music Listening",
    " Outdoor Photography",
    " Board Games",
    " Theme Park Visits",
    " Cooking",
    " Knitting",
    " Writing",
    " Canoeing",
    " Beachcombing",
    " Snorkeling",
    " Picnicking",
    " Golfing",
    " Fishing",
    " Baking",
    " Chess",
    " Beer Brewing",
    " Brewery Tours",
  ];



  return (
    <div>
      {/* //hobbies checklist */}
      <div className="checkList">
        <h1>What is your favorite hobby?</h1>
        <div className="title">
          <h1>Hobbies</h1>
        </div>
        <div className="list-container">
          {hobbies.map((item, index) => (
            <div key={index}>
              <input type="checkbox" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HobbyInfo;
