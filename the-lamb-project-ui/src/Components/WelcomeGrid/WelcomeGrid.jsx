import React from "react";

const WelcomeGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-5">
      <div className="bg-[#015239] p-4 rounded-lg text-white md:w-1/2 py-8">
        <h2 className="font-bold text-xl mb-4">
          ⚡ Personalized Recommendations ⚡
        </h2>
        <p>
          One of the primary benefits of LAMB is providing users with
          personalized city recommendations that align with their preferences,
          hobbies, values, and lifestyle. By understanding your specific
          preferences, such as desired neighborhood characteristics, safety
          considerations, and nearby amenities, LAMB can offer tailored
          suggestions that suit your unique needs. This all in one app saves
          precious time that can be used to explore your ideal city.
        </p>
      </div>

      <div className="bg-[#015239] p-4 rounded-lg text-white md:w-1/2 py-8">
        <h2 className="font-bold text-xl mb-4">
          🧠 Improved Decision-Making and Safety 🧠
        </h2>
        <p>
          With access to information about neighborhood safety and other crucial
          aspects of the area, users can make more informed decisions about
          their housing choices. This ensures that you select a safe and secure
          living environment, promoting a sense of confidence and peace of mind
          during the relocation process. Being well-informed about the
          neighborhood's features helps you avoid potential risks and make
          choices that align with your safety preferences.
        </p>
      </div>

      <div className="bg-[#015239] p-4 rounded-lg text-white md:w-1/2 py-8">
        <h2 className="font-bold text-xl mb-4">
          🌐 Enhanced Integration and Community Engagement 🌐
        </h2>
        <p>
          As young adults relocate to new cities or states, they often seek ways
          to integrate into their new communities and build social connections.
          LAMB can assist in this process by offering resources to connect with
          local communities, social events, and nearby attractions. By
          facilitating community engagement, LAMB fosters a smoother transition
          to the new environment, helping you establish a sense of belonging and
          familiarity more quickly.
        </p>
      </div>
    </div>
  );
};

export default WelcomeGrid;
