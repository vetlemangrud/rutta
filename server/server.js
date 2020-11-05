if(process.env.NODE_ENV !== "production") {
    require("dotenv").config
}


// Importing required modules
const cors = require('cors');
const express = require('express');
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

// parse env variables
require('dotenv').config();

require("./helpers/db/mongodb.js")();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('view engine', 'html');

app.use(express.urlencoded({extended:false}))
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use('/api', require('./routes/api'));
app.use('/login', require('./routes/login'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api og /login`);

module.exports = app;
