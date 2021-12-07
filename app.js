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

const kig = 12313;
const ab = "이름";
const name1 = "kigkm";
const name2 = "kigkm";
const name3 = "kigkm";
const name4 = "kigkm";
const name5 = "kigkm";

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START`);
});
