const AboutPage = () => {
  const Testimony = () => {
    return (
      <div className="bg-[#015239] p-8 rounded-lg shadow-md flex">
        {/* Testimonial content */}
        <img
          className="rounded-3xl w-80 h-80 object-cover mr-4"
          src="/images/testimony.jpeg"
          alt="Testimonial"
        />

        <div className="flex-1">
          <div className="text-4xl font-bold mb-4 text-white">
            Testimonial: Finding a Safe and Secure City
          </div>
          <div className="text-white mb-4 text-2xl">
            "I recently used the amazing LAMB web app to find a safe and secure
            city that matched my preferences perfectly. It personalized the search
            based on my requirements, and the results were fantastic! I feel much
            more confident in my decision to move to a new city now. Thank you for
            creating such a helpful tool!"
          </div>
          <div className="text-right text-2xl text-white">- Angelica Ramirez</div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold mb-4 text-center">About Us!</h2>

      <p className="mt-4 p-5 text-2xl">
        Our capstone pod aims to tackle the challenges associated with
        relocating to a different city or state. When individuals relocate, they
        often lack the necessary experience and familiarity with the new area to
        choose safe and suitable housing that aligns with their hobbies, values,
        and lifestyle. Our target audience consists of young adults seeking
        assistance with relocation for work. This group faces the daunting task
        of finding suitable housing in an unfamiliar location.
      </p>
      <p className="mt-0 p-5 text-2xl">
        To address these concerns, Project LAMB will offer personalized city
        recommendations based on users' preferences and needs. It will provide
        information about the city's safety, amenities, public transportation,
        and local attractions. By focusing on the needs of young adults
        relocating for work, our capstone project seeks to provide valuable
        assistance and alleviate the stress associated with the relocation
        process. We aspire to empower individuals in making informed decisions
        and ensuring a smoother transition to their new living environment.
      </p>

      {/* Include the Testimony component here */}
      <div className="flex flex-col mt-8">
        <Testimony />
      </div>
    </div>
  );
};

export default AboutPage;



// import React from "react";

// const WelcomeGrid = () => {
//   return (
//     <div className="flex flex-col gap-4 px-5 ">
//       <div className="bg-[#E4FAEE] p-4 rounded-lg text-black md:w-full py-8 flex items-center">
//       <img  className = "h-4/6 rounded-xl"src="images/swiping.gif" alt="Swiping animation" />

//         <div>
//           <h2 className="font-bold text-5xl mb-4">
//             ⚡ Personalized Recommendations ⚡
//           </h2>
//           <p className="text-lg px-2">
//             Explore your ideal city effortlessly with LAMB! Benefit from
//             personalized recommendations tailored to your preferences, covering
//             neighborhood characteristics, safety, and nearby amenities. This all
//             in one web app saves precious time that can be used to explore your
//             ideal city.
//           </p>
//         </div>
//       </div>

//       <div className="bg-[#015239] p-4 rounded-lg text-white md:w-full py-8 flex items-center">
//         <div>
//           <h2 className="font-bold text-xl mb-4">
//             🧠 Improved Decision-Making and Safety 🧠
//           </h2>
//           <p>
//             Discover peace of mind and confidence in your relocation process with
//             LAMB! Gain access to vital information about neighborhood safety and
//             other crucial aspects of the area. Choose a safe and secure living
//             environment, knowing that LAMB has your back every step of the way.
//           </p>
//         </div>
//         <img src="images/decision-making.gif" alt="Decision Making animation" className="max-w-80 ml-8" />
//       </div>

//       <div className="bg-[#015239] p-4 rounded-lg text-white md:w-full py-8 flex items-center">
//         <div>
//           <h2 className="font-bold text-xl mb-4">
//             🌐 Enhanced Integration and Community Engagement 🌐
//           </h2>
//           <p>
//             Experience a seamless transition and forge meaningful connections in
//             your new community with LAMB! Let us help you integrate into your
//             surroundings, fostering a sense of belonging and familiarity that will
//             make you feel right at home from day one.
//           </p>
//         </div>
//         <img src="images/integration.gif" alt="Integration animation" className="max-w-80 ml-8" />
//       </div>
//     </div>
//   );
// };

// export default WelcomeGrid;


