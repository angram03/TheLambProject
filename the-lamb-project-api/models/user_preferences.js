const xlsx = require("xlsx");
const db = require("../db");
require("../user_preferences_table.xlsx");

class User_Preference {
  static async insertData() {
    const file = reader.readFile("../user_preferences_table.xlsx");

    let data = [];
    const sheetName = file.SheetNames[0];
    const sheet = file.Sheets[sheetName];

    const jsonData = reader.utils.sheet_to_json(sheet);

    for (let i = 0; i < jsonData.length; i++) {
      let obj = jsonData[i];

      console.log("State: ", obj.State);
    }
    console.log(data);
  }
}
