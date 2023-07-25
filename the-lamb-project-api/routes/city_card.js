const express = require("express");
const User_Preference = require("../models/user_preferences");

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const response = await User_Preference.find({});
        res.json(response);
    } catch (err) {
        res.json(err)
    }
}
)

module.exports = router