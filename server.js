const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const pool = require("./database"); 
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); 
