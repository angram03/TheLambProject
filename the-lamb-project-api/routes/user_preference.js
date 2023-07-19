const express = require("express");
const User_Preference = require("../models/user_preferences");

const router = express.Router();

router.get("/preferences", async function (req, res, next) {
  try {
    console.log("HELLO");
    const preference = await User_Preference.insertData();
    return res.status(200).json({ preference });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
