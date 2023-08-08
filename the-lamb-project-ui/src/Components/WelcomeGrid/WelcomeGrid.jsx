import React from "react";

const WelcomeGrid = () => {
  return (
    <div className="flex flex-col gap-4 px-5 ">
      <div className="bg-[#E4FAEE] p-4 rounded-lg text-black md:w-full py-8 flex items-center">
      <img  className = "h-4/6 rounded-xl"src="images/swiping.gif" alt="Swiping animation" />

        <div>
          <h2 className="font-bold text-5xl mb-4">
            ⚡ Personalized Recommendations ⚡
          </h2>
          <p className="text-lg px-2">
            Explore your ideal city effortlessly with LAMB! Benefit from
            personalized recommendations tailored to your preferences, covering
            neighborhood characteristics, safety, and nearby amenities. This all
            in one web app saves precious time that can be used to explore your
            ideal city.
          </p>
        </div>
      </div>

      <div className="bg-[#015239] p-4 rounded-lg text-white md:w-full py-8 flex items-center">
        <div>
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
        <img src="images/decision-making.gif" alt="Decision Making animation" className="max-w-80 ml-8" />
      </div>

      <div className="bg-[#015239] p-4 rounded-lg text-white md:w-full py-8 flex items-center">
        <div>
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
        <img src="images/integration.gif" alt="Integration animation" className="max-w-80 ml-8" />
      </div>
    </div>
  );
};

export default WelcomeGrid;

