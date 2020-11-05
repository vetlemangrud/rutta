const express = require('express');
const bcrypt = require("bcrypt");
const passport = require("passport");

users = [
  {
    id: "1234fs213rwfe",
    name: "Vetle",
    password: "Hei"
  },
  {
    id: "asfdgwrt23rwrge",
    name: "Reidar",
    password: "Hallo"
  }
]

const initializePassport = require("../passport-config")
initializePassport(
  passport,
  name => users.find(user => user.name === name),
  id => users.find(user => user.id === id)
)

const router = express.Router();

router
  .post("/", passport.authenticate("local", {
    failureFlash: true,
  }), (req, res) => res.status(200).json(req.user))

module.exports = router;
