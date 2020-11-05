const express = require('express');
const bcrypt = require("bcrypt");
const passport = require("passport");

users = [
  {
    name: "Vetle",
    password: "Hei"
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
    failureFlash: true
  }))

module.exports = router;
