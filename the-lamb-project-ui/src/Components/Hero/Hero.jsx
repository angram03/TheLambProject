import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // contains entire hero, relative allows us to position the video and other elements inside it

    <div className="relative bg-[#015239] rounded-sm text-white p-10 text-center py-96">
      {/* allows video to display on page 
      This will position the video absolutely within its parent container and make it cover the entire area of the parent div while maintaining its aspect ratio. */}

      {/* displays video background, 
      absolute top and left 0 allows video to cover the parent div (hero div) 
      object cover allows video to cover entire area while keeping ratio of the hero div*/}
      {/* opacity allows the text to be seen better */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-sm opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="/videos/daytime.mp4" type="video/mp4" />
        {/* Add additional source elements for other video formats */}
      </video>
      {/* relative sets positioning for its children and allows to position the text inside it */}
      {/* z-10 determines the stacking order of elements since it is a higher z index, we ensure the text appears on top of the video background */}
      <div className="relative z-10 ">
        <h2 className="pb-6 text-8xl text-white">Your Travel Advisor</h2>
        <h3 className="pb-3 text-5xl  text-white">
          From Occupation to Exploration, Let Us Reveal Your Dream City!
        </h3>
        <br></br>

        <button className=" bg-white hover:bg-[#E4FAEE] text-[#015239] text-2xl px-2 py-2 rounded-lg">
          <Link to="/register">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
