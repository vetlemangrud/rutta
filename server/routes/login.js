const express = require('express');
const bcrypt = require("bcrypt");
const passport = require("passport");

const initializePassport = require("../passport-config")

const router = express.Router();

router
  .get("/", (req, res) => res.status(200).json({message: "hei"}))

module.exports = router;
