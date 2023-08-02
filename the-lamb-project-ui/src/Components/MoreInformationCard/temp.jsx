// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import cities from "./longlat.json";

// export default function CityCard({ city }) {
//     const [scoreData, setScoreData] = useState(null);

//     useEffect(() => {
//       const fetchScore = async () => {
//         try {
//           const cityData = {
//             name: "New York",
//             latitude: 40.7128,
//             longitude: -74.0060,
//             address: "123 Broadway, New York, NY"
//           };
//           // Update the cityData object with the correct values from your JSON
  
//           const baseURL = new URL("https://api.walkscore.com/score");
//           baseURL.searchParams.append("format", "json");
//           baseURL.searchParams.append("address", cityData.address);
//           baseURL.searchParams.append("lat", cityData.latitude);
//           baseURL.searchParams.append("lon", cityData.longitude);
//           baseURL.searchParams.append("transit", 1);
//           baseURL.searchParams.append("bike", 1);
//           baseURL.searchParams.append("wsapikey", "b73706efff9281b026a51eeed761cc59");
  
//           const res = await axios.get(baseURL.toString());
//           setScoreData(res.data);
//         } catch (error) {
//           console.log("Failed to fetch the data", error);
//         }
//       };
  
//       fetchScore();
//     }, [city]);
  
//     return (
//       <div>
//         {scoreData ? (
//           <div>
//             <h2>Walkscore: {scoreData.walkscore}</h2>
//             <p>Transit Score: {scoreData.transit.score}</p>
//             <p>Bike Score: {scoreData.bike.score}</p>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   };


import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CityCard({ city }) {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const baseURL = new URL("https://api.walkscore.com/score");
        baseURL.searchParams.append("format", "json");
        baseURL.searchParams.append("address", city);
        baseURL.searchParams.append("transit", 1);
        baseURL.searchParams.append("bike", 1);
        baseURL.searchParams.append("wsapikey", "<YOUR-WSAPIKEY>");

        const res = await axios.get(baseURL.toString());
        setScoreData(res.data);
      } catch (error) {
        console.log("Failed to fetch the data", error);
      }
    };

    fetchScore();
  }, [city]);

  return (
    <div>
      {scoreData ? (
        <div>
          <h2>Walkscore: {scoreData.walkscore}</h2>
          <p>Transit Score: {scoreData.transit.score}</p>
          <p>Bike Score: {scoreData.bike.score}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
