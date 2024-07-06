// const express = require("express");
// const bodyParser = require("body-parser");
// var app = express();
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/todo");
// const trySchema = new mongoose.Schema({
//   name: String,
// });
// const item = mongoose.model("task", trySchema);
// const todo = new item({
//   name: "Let's create some videos",
// });
// const todo1 = new item({
//   name: "Let's learn DSA",
// });
// const todo2 = new item({
//   name: "Let's chill",
// });
// const todo3 = new item({
//   name: "Let's code",
// });

// // todo.save();
// // todo1.save();
// // todo2.save();
// // todo3.save();
// app.get("/", function (req, res) {
//   item.find({}, function (err, foundItems) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("list", { ejes: foundItems });
//     }
//   });
// });
// app.listen("3000", function () {
//   console.log("server started at port 3000");
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const app = express();
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views"); // Explicitly set the views directory
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/todo");

// const trySchema = new mongoose.Schema({
//   name: String,
// });
// const item = mongoose.model("task", trySchema);

// const todo = new item({
//   name: "Let's create some videos",
// });
// const todo1 = new item({
//   name: "Let's learn DSA",
// });
// const todo2 = new item({
//   name: "Let's chill",
// });
// const todo3 = new item({
//   name: "Let's code",
// });

// // todo.save();
// // todo1.save();
// // todo2.save();
// // todo3.save();

// app.get("/", async (req, res) => {
//   try {
//     const foundItems = await item.find({});
//     res.render("list", { ejes: foundItems });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post("/", function (req, res) {
//   const itemName = req.body.ele1;
//   const todo4 = new item({
//     name: itemName,
//   });
//   todo4.save();
//   res.redirect("/");
// });
// app.post("/delete", function (req, res) {
//   const checkedItem = req.body.checkbox1;
//   item.findByIdAndRemove(checkedItem, function (err) {
//     if (!err) {
//       res.redirect("/");
//     }
//   });
// });

// app.listen("3000", function () {
//   console.log("server started at port 3000");
// });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // Explicitly set the views directory
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todo");

const trySchema = new mongoose.Schema({
  name: String,
});
const item = mongoose.model("task", trySchema);

const todo = new item({
  name: "Let's create some videos",
});
const todo1 = new item({
  name: "Let's learn DSA",
});
const todo2 = new item({
  name: "Let's chill",
});
const todo3 = new item({
  name: "Let's code",
});

// todo.save();
// todo1.save();
// todo2.save();
// todo3.save();

app.get("/", async (req, res) => {
  try {
    const foundItems = await item.find({});
    res.render("list", { ejes: foundItems });
  } catch (err) {
    console.log(err);
  }
});

app.post("/", async (req, res) => {
  const itemName = req.body.ele1;
  const todo4 = new item({
    name: itemName,
  });
  await todo4.save();
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const checkedItem = req.body.checkbox1;
  try {
    await item.findByIdAndRemove(checkedItem);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen("3000", function () {
  console.log("server started at port 3000");
});
