const express = require("express");
let potatoes = require("./potatoes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

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

app.delete("/potatoes/:potatoId", (req, res) => {
  const { potatoId } = req.params;
  const foundPotato = potatoes.find((potato) => potato.id === +potatoId);
  if (foundPotato) {
    potatoes = potatoes.filter((potato) => potato.id !== +potatoId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Potato not found" });
  }
});

app.post("/potatoes", (req, res) => {
  const id = potatoes[potatoes.length - 1].id + 1;
  const newPotato = { id, ...req.body };
  potatoes.push(newPotato);
  res.status(201).json(newPotato);
});

app.put("/potatoes/:potatoId", (req, res) => {
  const { potatoId } = req.params;
  const foundPotato = potatoes.find((potato) => potato.id === +potatoId);
  if (foundPotato) {
    for (const key in req.body) foundPotato[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Potato not found" });
  }
});

app.listen(8000, () => {
  console.log("Running on localhost:8000");
});
