const express = require("express");
const cityRouter = express.Router();
const User_Preference = require("../models/user_preferences");

cityRouter.post("/matchedcitycards", async(req, res) => {
    console.log("Endpoint hit")
    console.log(req.body)
    const preference = req.body.formData
    try {
        await User_Preference.insertData()
        const result = await User_Preference.gettingData({preference})
        console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})

module.exports = cityRouter
