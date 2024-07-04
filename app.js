const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();

//view engine for ejs
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
var items = [];

var example = "working";
app.get("/", function (req, res) {
  //res.send("This web page is working Fine");
  res.render("list", { ejes: items });
});

// post request

app.post("/", function (req, res) {
  var item = req.body.ele1;
  items.push(item);
  res.redirect("/");
});

//server
app.listen(8000, function () {
  console.log("Server is started");
});
