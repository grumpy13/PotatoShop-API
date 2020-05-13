const express = require("express");
const potatoRoutes = require("./routes/potatoes");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

app.use("/potatoes", potatoRoutes);

app.listen(8000, () => {
  console.log("Running on localhost:8000");
});
