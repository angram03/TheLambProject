import React from "react";
import { useState } from "react";


const HobbyInfo = ({formData, setFormData}) => {


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
     
      <div className="checkList">
        <h1 className="font-heavy">What is your favorite hobby?</h1>
      
        <div className="title">
          <h3 className="font-heavy">select only one.</h3>
        </div>
        <br />
        <div className="list-container">
          {hobbies.map((item, index) => (
            <div key={index}>
              <input type="checkbox" onChange={() => {setFormData({...formData, "hobbies": item})}}  checked={item === formData.hobbies} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HobbyInfo;


