const reader = require("xlsx");
// require("./user_preferences_table.xlsx");
const file = reader.readFile("./user_preferences_table.xlsx");

let data = [];

const sheetName = file.SheetNames[0];

const sheet = file.Sheets[sheetName];

const jsonData = reader.utils.sheet_to_json(sheet);
// console.log(jsonData);

// for (let i = 0; i < jsonData.length; i++) {
//   let obj = jsonData[i];
//   // console.log("City: ", obj.City);
//   console.log("State: ", obj.State);
//   // console.log("Physician: ", obj.Physician);
// }
console.log(jsonData[0]);

// for (let row of jsonData) {
//   const cellValue = row[columnName];
//   data.push(cellValue);
// }
// const range = sheet["A:A"];
// console.log(range);

// for (let cell in range) {
//   const cellValue = cell.v;

//   data.push(cellValue);
// }

console.log(data);
// for (let i = 0; i < sheets.length; i++) {
//   const temp = reader.utils.sheet_to_json(file.SheetNames[file.SheetNames[i]]);
//   temp.forEach((res) => {
//     data.push(res);
//   });
// }

// console.log(data);
