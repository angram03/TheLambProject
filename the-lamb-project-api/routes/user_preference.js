const express = require("express");
const User_Preference = require("../models/user_preferences");

const router = express.Router();

router.get("/preferences", async function (req, res, next) {
  try {
    console.log("PREFERENCES");
    const user_preference = await User_Preference(req.body);
    return res.status(200).json({ user_preference });
  } catch (err) {
    next(err);
  }
});
