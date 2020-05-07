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

app.get("/potatoes/:potatoId", (req, res) => {
  const { potatoId } = req.params;
  const foundPotato = potatoes.find((potato) => potato.id === +potatoId);
  if (foundPotato) {
    res.json(foundPotato);
  } else {
    res.status(404).json({ message: "Potato not found" });
  }
});

app.listen(8000, () => {
  console.log("Running on localhost:8000");
});
