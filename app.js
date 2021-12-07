const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 4000;

app.use(morgan("dev"));

const test = [];
const test12 = {};
const aaa = "";
const bbb = "";
const ccc = "";

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START`);
});
