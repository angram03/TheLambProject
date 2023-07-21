const express = require("express");
const User_Preference = require("../models/user_preferences");

const router = express.Router();

//put the preferences in the table

router.get("/preferences", async function (req, res, next) {
  try {
    console.log("HELLO");
    const preference = await User_Preference.insertData();
    return res.status(200).json({ preference });
  } catch (err) {
    next(err);
  }
});

//get the personal preferences information
router.get("/personal_preference", async function (req, res, next) {
  try {
    console.log("Personal Preference");

    const pers_perfernece = await User_Preference.gettingData(req.body);
    return res.status(201).json({ pers_perfernece });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
