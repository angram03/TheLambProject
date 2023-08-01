import React from "react";

const WelcomeGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-5">
      <div className="bg-[#015239] p-4 rounded-lg text-white md:w-1/2 py-8">
        <h2 className="font-bold text-xl mb-4">
          ⚡ Personalized Recommendations ⚡
        </h2>
        <p>
          Explore your ideal city effortlessly with LAMB! Benefit from
          personalized recommendations tailored to your preferences, covering
          neighborhood characteristics, safety, and nearby amenities. This all in one web app saves precious time that can be used to
          explore your ideal city.
        </p>
      </div>

      <div className="bg-[#015239] p-4 rounded-lg text-white md:w-1/2 py-8">
        <h2 className="font-bold text-xl mb-4">
          🧠 Improved Decision-Making and Safety 🧠
        </h2>
        <p>
          Discover peace of mind and confidence in your relocation process with
          LAMB! Gain access to vital information about neighborhood safety and
          other crucial aspects of the area. Choose a safe and secure living
          environment, knowing that LAMB has your back every step of the way.
        </p>
      </div>

      <div className="bg-[#015239] p-4 rounded-lg text-white md:w-1/2 py-8">
        <h2 className="font-bold text-xl mb-4">
          🌐 Enhanced Integration and Community Engagement 🌐
        </h2>
        <p>
          Experience a seamless transition and forge meaningful connections in
          your new community with LAMB! Let us help you integrate into your
          surroundings, fostering a sense of belonging and familiarity that will
          make you feel right at home from day one.
        </p>
      </div>
    </div>
  );
};

export default WelcomeGrid;
