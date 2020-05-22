const express = require("express");
const potatoRoutes = require("./routes/potatoes");
const bodyParser = require("body-parser");
const db = require("./db/");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

app.use("/potatoes", potatoRoutes);

const run = async () => {
  await db.sync();
  app.listen(8000, () => {
    console.log("Running on localhost:8000");
  });
};

run();
