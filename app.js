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

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.use((req, res, next) => {
  const err = new Error("Path Not Found");
  err.status = 404;
  next(err);
});

run();
