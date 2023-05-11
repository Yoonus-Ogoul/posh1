require("dotenv").config();
require("./config/database");
const express = require("express");
const router = require("./router");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 5000;
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());
// configure v1 of the api
app.use("/", router);

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const server = app.listen(port, () =>
 { console.log(`Server listening to http://localhost:${port}`);
 }
);
