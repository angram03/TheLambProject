const xlsx = require("xlsx");
const db = require("../db");
const User = require("./user");
const { BadRequestError } = require("../utils/errors");
// const { json } = require("express");

class User_Preference {
  //  provides functionality for inserting user preferences
  // from an Excel file into a PostgreSQL database

  // insertData reads data from Excel file and inserts it into database
  static async insertData() {
    const file = xlsx.readFile("./user_preferences_table.xlsx");
    const data = [];

    const sheetName = file.SheetNames[0];
    const sheet = file.Sheets[sheetName];
    const datalistJsonData = xlsx.utils.sheet_to_json(sheet);

    for (let i = 0; i < datalistJsonData.length; i++) {
      const jsonData = datalistJsonData[i];

      // data represents user preferences for different categories/industries

      try {
        // an sql query that uses placeholders for the values that will be replaced with actual values
        //data is from the jsonData object
        const result = await db.query(
          `
          INSERT INTO users_preference (
            City,
            State,
            Physician,
            Software,
            Teachers,
            Fashion,
            Culinary,
            Social_Work,
            Hobby,
            Images
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING *;
        `,
          [
            jsonData.City,
            jsonData.State,
            jsonData.Physician,
            jsonData.Software,
            jsonData.Teachers,
            jsonData.Fashion,
            jsonData.Culinary,
            jsonData.Social_Work,
            jsonData.Hobby,
            jsonData.Images,
          ]
        );

        // code extracts the first row which is the newly inserted info

        const row = result.rows[0];
        console.log("row", result.rows[0]);
        data.push(row);
      } catch (err) {
        // Check if the error is due to a duplicate key violation (city already exists)
        if (err.code === "23505") {
          console.error(
            `Duplicate data for city: ${jsonData.City}. Skipping insertion.`
          );
        } else {
          // Handle other errors
          console.error("Error while inserting data:", err.message);
        }
      }
    }

    return data;
  }

  static async gettingData(preference) {
    const requiredField = ["state", "hobbies", "industry", "weather"];
    console.log(preference);

    requiredField.forEach((field) => {
      if (!preference.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });
    const columnName = preference.industry;
    console.log("industry: ", preference.industry);
    const query = `
    SELECT * FROM users_preference 
      WHERE state = $1 OR Hobby = $2 OR ${columnName} = true
      ORDER BY 
        CASE WHEN state = $1 THEN 0 ELSE 1 END, 
          CASE WHEN Hobby = $2 THEN 0 ELSE 1 END;
  
      `;
    const result = await db.query(query, [preference.state, preference.hobby]);
    const user = result.rows;
    return user;
  }
}

module.exports = User_Preference;
