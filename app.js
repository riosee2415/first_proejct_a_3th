const express = require("express");

const app = express();
const PORT = 4000;

const test = [];

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START`);
});
