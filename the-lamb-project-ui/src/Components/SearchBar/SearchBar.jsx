import React from "react";

const SearchBar = () => {
  return (
  <div className='p-10 pl-40'>
    
    Search:  
    <input type = "text" placeholder="Search for a city..."/>
    <button type = "submit">Submit</button>

  </div>
  );
};

export default SearchBar;
