import React from "react";

const Destinations = () => {
  return (
    <div className="py-10">
      <div className="bg-[#015239] p-4 rounded-lg text-white  py-8 mx-5 px-20">
        <div className="font-bold text-2xl text-white pb-10">
          Previously Matched Destinations...
        </div>
        <div className="text-white font-bold font-text-xl flex flex-wrap  justify-center">
          <div className="flex items-center mx-2 mb-2 group relative">
            <img
              src="images/sanfrancisco.jpg"
              alt="San Francisco, California"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />

            <div className="w-40 absolute bottom-5 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center bg-black bg-opacity-70 px-2 py-1 rounded-md">
              San Francisco, CA
            </div>
          </div>

          <div className="flex items-center mx-2 mb-2 group relative">
            <img
              src="images/dallas.jpg"
              alt="San Francisco, California"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />

            <div className="w-40 absolute bottom-5 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center bg-black bg-opacity-70 px-2 py-1 rounded-md">
              Dallas, TX
            </div>
          </div>

          <div className="flex items-center mx-2 mb-2 group relative">
            <img
              src="images/phoenix.jpeg"
              alt="San Francisco, California"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />

            <div className="w-40 absolute bottom-5 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center bg-black bg-opacity-70 px-2 py-1 rounded-md">
              Phoenix, AZ
            </div>
          </div>

          <div className="flex items-center mx-2 mb-2 group relative">
            <img
              src="images/newyork.jpg"
              alt="San Francisco, California"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />

            <div className="w-40 absolute bottom-5 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center bg-black bg-opacity-70 px-2 py-1 rounded-md">
              New York, NY
            </div>
          </div>

          <div className="flex items-center mx-2 mb-2 group relative">
            <img
              src="images/losangeles.jpeg"
              alt="San Francisco, California"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />

            <div className="w-40 absolute bottom-5 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center bg-black bg-opacity-70 px-2 py-1 rounded-md">
              Los Angeles, CA
            </div>
          </div>

          <div className="flex items-center mx-2 mb-2 group relative">
            <img
              src="images/houston.jpg"
              alt="Houston, TX"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />

            <div className="w-40 absolute bottom-5 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center bg-black bg-opacity-70 px-2 py-1 rounded-md">
              Houston, TX
            </div>
          </div>

          <div className="flex items-center mx-2 mb-2 group relative">
            <img
              src="images/chicago.jpg"
              alt="Chicago, IL"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />

            <div className="w-40 absolute bottom-5 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center bg-black bg-opacity-70 px-2 py-1 rounded-md">
              Chicago, IL
            </div>
          </div>

          <div className="flex items-center mx-2 mb-2 group relative">
            <img
              src="images/atlanta.jpg"
              alt="Atlanta, GA"
              className="w-80 h-60 object-cover rounded-md mr-2 pb-5"
            />

            <div className="w-40 absolute bottom-5 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center bg-black bg-opacity-70 px-2 py-1 rounded-md">
              Atlanta, GA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
