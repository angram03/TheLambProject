const express = require("express");
const User_Preference = require("../models/user_preferences");
const User = require("../models/user");
const router = express.Router();

//put the preferences in the table
//renders on the table
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
//based on industry, hobby, etc....
router.post("/personal_preference", async function (req, res, next) {
  const dataInfo = req.body;
  console.log("whats in dataInfo: ", dataInfo);
  try {
    console.log("Personal Preference");

    const pers_preference = await User_Preference.gettingData(
      req.body.formData
    );

    return res.status(200).json({ pers_preference });
  } catch (err) {
    next(err);
  }
});

//Saves user prefernece.
router.post("/getUserPreference", async function (req, res, next) {
  try {
    // const { user } = res.locals.user;
    // console.log("save the users information");
    // console.log("user_id:" + user);
    console.log("getUserPreferneces reqbody", req.body.formData.formData);
    const { email } = res.locals.user;
    console.log("res.local1", res.locals.user.email);
    console.log("reques body", req.body.formData);
    const preference = await User_Preference.savingUserData(
      req.body.formData,
      email
    );
    return res.status(201).json({ preference });
  } catch (err) {
    console.log("User Preference", err);
    next(err);
  }
});
router.get("/filledOutPreferenceForm", async function (req, res, next) {
  try {
    const { email } = res.locals.user;
    const preferenceExist =
      await User_Preference.checkingIfUserFilledPreference(email);
    return res.status(201).json({ preferenceExist });
  } catch (error) {
    console.log(error);
  }
});

//getting back user preference.
const response = {
  success: false,
};
router.get("/returningUserInformation", async function (req, res, next) {
  try {
    const { email } = res.locals.user;
    console.log("emeail", email);
    const returningUserInformation =
      await User_Preference.getReturningUserPreferences(email);
    console.log("RETURNING USER PREFERENCE", returningUserInformation);
    if (typeof returningUserInformation === "undefined") {
      console.log("HELLO");
      return res.status(201).json("false");
    } else {
      return res.status(201).json({ returningUserInformation });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
