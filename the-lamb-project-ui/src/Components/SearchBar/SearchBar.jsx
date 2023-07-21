import React from "react";

const SearchBar = () => {
  return (
    <div className="p-20 flex items-center justify-center">
      <form>
        <label htmlFor="citysearch"></label>
        <input type="text" id="citysearch" placeholder="Search for a city..." />
        <button
          className="one bg-[#015239] text-white px-2 py-2 rounded-lg"
          type="submit"
        >
          Try Now!
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
