const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");
const Contact = require('./contact');
const partialPath = path.join(__dirname, "./partials");
const static_path = path.join(__dirname, "./public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
require("../db/conn");
app.set("view engine", "hbs");

hbs.registerPartials("./partials");
app.get("/", (req, res) => {
  res.render("index");
  // console.log("Rendering")
});
app.get("/home", (req, res) => {
  res.render("index");
  // console.log("Rendering")
});
app.get("/contactus", (req, res) => {
  res.render("contactUs");
  // console.log("Rendering")
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
  // console.log("Rendering")
});
app.post("/contactus", async (req, res) => {
  try {
    const newTourist = new Contact({
      name: req.body.name,
      email: req.body.email,
      description: req.body.area,
      phonenumber: req.body.phone,
    });
    const touristData = await newTourist.save();
    res.status(201).render("index");
  } catch (e) {
    res.send(e);
  }
});
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
