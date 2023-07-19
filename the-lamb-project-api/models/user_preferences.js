const xlsx = require("xlsx");
const db = require("../db");
const User = require("./user");
// const { json } = require("express");

class User_Preference {
  static async insertData() {
    const file = xlsx.readFile(
      "/Users/hmuse/Desktop/TheLambProject/the-lamb-project-api/user_preferences_table.xlsx"
    );

    const data = [];
    const sheetName = file.SheetNames[0];
    const sheet = file.Sheets[sheetName];

    const datalistJsonData = xlsx.utils.sheet_to_json(sheet);

    for (let i = 0; i < datalistJsonData.length; i++) {
      const jsonData = datalistJsonData[i];

      const result = await db.query(
        `
        INSERT INTO users_preference(
          City,
          State,
          Physician,
          Software,
          Teachers,
          Fashion,
          Culinary,
          Social_Work,
          Hobby,
          Hottest_Summer,
          Coldest_Winter
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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
          jsonData.Hottest_Summer,
          jsonData.Coldest_Winter,
        ]
      );
      const row = result.rows[0];
      data.push(row);
    }

    // for (let i = 0; i < jsonData.length; i++) {
    //   let obj = jsonData[i];

    //   console.log("State: ", obj.State);
    // }

    // const user_preferences = result.rows;
    return data;
  }
}
module.exports = User_Preference;
