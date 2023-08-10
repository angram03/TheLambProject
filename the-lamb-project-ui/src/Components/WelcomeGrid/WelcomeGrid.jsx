import React from "react";

const WelcomeGrid = () => {
  return (
    <div>
      
      <h1 className="text-6xl py-12 px-12 text-[#015239]">Relocating to a new city made simple. </h1>
    <div className="flex flex-col md:flex-row gap-8 px-5 py-16">
      <div className="bg-[white]  p-8 rounded-lg text-[#015239]  outline outline-4 md:w-1/2 py-16">
        
        <h1 className="font-bold text-4xl text-center">1</h1>
        <div className="flex justify-center items-center">
          <img className="w-1/2" src="images/feedback.png" />
        </div>
        <h2 className="font-bold text-4xl mb-4 text-center">
          Personalize your recomendations
        </h2>
      </div>

      <div className="bg-[white]  p-8 rounded-lg text-[#015239]  outline outline-4 md:w-1/2 py-16">
        <h1 className="font-bold text-4xl text-center">2</h1>
        <div className="flex justify-center items-center">
          <img className="w-1/2" src="images/choosing.gif" />
        </div>
        <h2 className="font-bold text-4xl mb-4 text-center">Start Swiping!</h2>
      </div>

      <div className="bg-[white]  p-8 rounded-lg text-[#015239]  outline outline-4 md:w-1/2 py-16">
        <h1 className="font-bold text-4xl text-center">3</h1>
        <div className="flex justify-center items-center">
          <img className=" w-1/2" src="images/website.png" />
        </div>
        <h2 className="font-bold text-4xl mb-4 text-center px-8">Instant City Data</h2>
      </div>
    </div>
    </div>
  );
};

export default WelcomeGrid;
