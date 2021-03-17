const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.set("view engine", "ejs");

var users = [];

//index routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  users.push({ name: req.body.name });
  res.redirect("/users");
});

//user routes
app.get("/users", function (req, res) {
  res.render("users", {
    names: users,
  });
});

app.listen(1000, () => {
  console.log("listening at 1000");
});
