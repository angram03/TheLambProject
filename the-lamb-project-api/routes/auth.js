const express = require("express");
const User = require("../models/user");
const router = express.Router();
const security = require("../middleware/security");

const { createdUserJwt } = require("../utils/token");

router.post("/login", async function (req, res, next) {
  try {
    const user = await User.login(req.body);
    const token = createdUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    // next(err);
  }
});
router.post("/register", async function (req, res, next) {
  try {
    const user = await User.register(req.body);
    const token = createdUserJwt(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    console.log("Error".red);
    next(err);
  }
});

router.get(
  "/me",
  security.requireAuthenticationUser,
  async function (req, res, next) {
    try {
      const { email } = res.locals.user;
      const user = await User.fetchUserByEmail(email);
      console.log("ME", user);
      const publicUser = await User.makePublicUser(user);
      console.log("/me pubuser", publicUser);
      return res.status(200).json({ user: publicUser });
    } catch (err) {
      console.log("Error".red);
      next(err);
    }
  }
);

module.exports = router;
