const express = require("express");
const User = require("../models/user");
const router = express.Router();
// const security = require("../middleware/security");

const { createdUserJwt } = require("../utils/token");

router.post("/login", async function (req, res, next) {
  try {
    console.log("HELLO");
    const user = await User.login(req.body);
    const token = createdUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    // next(err);
  }
});
router.post("/register", async function (req, res, next) {
  try {
    console.log("Hello");
    const user = await User.register(req.body);

    return res.status(201).json({ user });
  } catch (err) {
    console.log("Error".red);
    next(err);
  }
});

module.exports = router;
