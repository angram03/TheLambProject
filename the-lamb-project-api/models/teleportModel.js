class User_Preference {
    static async insertCityScores(cityName, scores, summary) {
      try {
        const query = `
          INSERT INTO city_scores (city_name, scores, summary)
          VALUES ($1, $2, $3)
          RETURNING *;
        `;
        const values = [cityName, scores, summary];
        const result = await db.query(query, values);
  
        const row = result.rows[0];
        console.log('Inserted city scores:', row);
        return row;
      } catch (err) {
        console.error('Error inserting city scores:', err.message);
        throw err;
      }
    }
  }
  
  // ...
  
  for (let i = 0; i < datalistJsonData.length; i++) {
    const jsonData = datalistJsonData[i];
  
    // data represents user preferences for different categories/industries
  
    try {
      // Fetch city scores from the Teleport API
      const response = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${jsonData.City}/scores/`);
      const scores = response.data;
      const summary = response.data.summary;
  
      // Insert city scores into the database
      await User_Preference.insertCityScores(jsonData.City, scores, summary);
  
      // ...
    } catch (err) {
      // Handle errors
    }
  }
  
  // ...
  
  app.get('/api/city/:cityName/scores', async (req, res, next) => {
    const cityName = req.params.cityName;
  
    try {
      const response = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`);
      const scores = response.data;
      res.json(scores);
  
    } catch (error) {
      // Handle errors
    }
  });
  
  // ...
  