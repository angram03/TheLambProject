import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityScores = () => {
  const [cityName, setCityName] = useState('');
  const [scores, setScores] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/city/houston/scores')
      .then((response) => {
        setCityName(response.data._links.ua.name);
        setScores(response.data.categories);
      })
      .catch((error) => {
        console.error('Error fetching city scores:', error.message);
      });
  }, []);

  if (!scores) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{cityName} City Scores</h1>
      {scores.map((category) => (
        <div key={category.name}>
          <h3>{category.name}</h3>
          <p>Score: {category.score_out_of_10}</p>
        </div>
      ))}
    </div>
  );
};

export default CityScores;
