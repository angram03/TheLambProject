import React from "react";

import "./MatchedCityPage.css";
import { useEffect, useState} from "react";
import axios from "axios";
import MatchedCityCard from "../MatchedCityCard/MatchedCityCard";

const MatchedCityPage = ({formData}) => {

  const [cityCard, setCityCard] = useState("")
  useEffect (() => {
    cityAPICall()

 }, []) 
 async function cityAPICall(){
   try {
     const result = await axios.post("http://localhost:3001/city/matchedcitycards", {formData}) //
     console.log(result?.data) //response from the post request
     setCityCard(result?.data)
   } catch (error) { // error handling, won't crash your code
     console.log(error)
     
   }
 }
  return (
    <div>
      <MatchedCityCard AcceptCity={AcceptCity}/>
    </div>
  )
  
  
 

};

export default MatchedCityPage;
