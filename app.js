const express = require("express");
const potatoes = require("./potatoes");

const app = express();

app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

app.get("/potatoes", (req, res) => {
  res.json(potatoes);
});

app.listen(8000, () => {
  console.log("Running on localhost:8000");
});
