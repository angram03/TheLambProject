import React from "react";

const Destinations = () => {
  return (
    <div className="py-10">
      <div className="bg-[#015239] p-4 rounded-lg text-white  py-8 mx-5 px-20">
        <div className="font-bold text-2xl text-white pb-10">Previously Matched Destinations...</div>
        <div className="text-white font-bold font-text-xl flex flex-wrap ">
          <div className="flex items-center mx-2 mb-2">
            <img
              src="images/sanfrancisco.jpg"
              alt="San Francisco, California"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />
            <div className="w-40">San Francisco, CA</div>
          </div>
          <div className="flex items-center mx-2 mb-2 pb-5">
            <img
              src="images/dallas.jpg"
              alt="Dallas, Texas"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />
            <div className="w-40">Dallas, TX</div>
          </div>
          <div className="flex items-center mx-2 mb-2 pb-5">
            <img
              src="images/newyork.jpg"
              alt="New York, New York"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />
            <div className="w-40">New York, NY</div>
          </div>
          <div className="flex items-center mx-2 mb-2 pb-5">
            <img
              src="images/houston.jpg"
              alt="Houston, Texas"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />
            <div className="w-40">Houston, TX</div>
          </div>
          <div className="flex items-center mx-2 mb-2 pb-10">
            <img
              src="images/chicago.jpg"
              alt="Chicago, Illinois"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />
            <div className="w-40">Chicago, IL</div>
          </div>
          <div className="flex items-center mx-2 mb-2 pb-10">
            <img
              src="images/atlanta.jpg"
              alt="Atlanta, Georgia"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />
            <div className="w-40">Atlanta, GA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
