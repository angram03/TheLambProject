import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#015239] rounded-sm text-white p-20 text-center">
      <video className='object-cover w-ful h-full fixed -z-1'
        src="https://www.youtube.com/embed/vE3BAgh_VAQ"
        allow="autoplay; loop; muted;"
      ></video>
      <h2 className="pb-3 text-xl">Your Trip Advisor</h2>
      <h3 className="pb-3 text-lg">
        From Occupation to Exploration, Let Us Reveal Your Dream City!
      </h3>

      <video src="https://www.youtube.com/embed/vE3BAgh_VAQ"></video>
      <button className="one bg-white text-[#015239] px-2 py-2 rounded-lg">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
