const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 7000;
app.use(cors());

app.get("/chunk", (req, res) => {
  try {
    const max = 5;
    let count = 1;
    const timer = setInterval(() => {
      res.write(`Hello ${count}
      `);
      count++;
      if (count === max) {
        res.end("end");
        clearInterval(timer);
      }
    }, 3000);
  } catch (e) {
    res.end(e);
  }
});
app.get("/proxy", (req, res) => {
  try {
    const max = 5;
    let count = 1;
    const timer = setInterval(() => {
      res.write(`Hello ${count}
      `);
      count++;
      if (count === max) {
        res.end("end");
        clearInterval(timer);
      }
    }, 3000);
  } catch (e) {
    res.end(e);
  }
});
app.listen(port);
