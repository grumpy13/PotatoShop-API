const express = require("express");
const potatoRoutes = require("./routes/potatoes");
const bodyParser = require("body-parser");
const db = require("./db/db");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

app.use("/potatoes", potatoRoutes);

const run = async () => {
  try {
    await db.authenticate();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();

// app.listen(8000, () => {
//   console.log("Running on localhost:8000");
// });
