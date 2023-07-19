import React from "react";

const SearchBar = () => {
  return (
  <div className='p-10 pl-40'>
    
    Search:  
    <input type = "text" placeholder="Search for a city..."/>
    <button className='one bg-[#015239] text-white px-2 py-2 rounded-lg'type = "submit">Try Now!</button>

  </div>
  );
};

export default SearchBar;
