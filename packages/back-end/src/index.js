const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.get("/chunk", (req, res) => {
  try {
    const max = 5;
    let count = 1;
    res.setHeader("Access-Control-Allow-Origin", true);
    const timer = setInterval(() => {
      res.write(`Hello ${count}`);
      count++;
      if (count === max) {
        res.send("end");
        clearInterval(timer);
      }
    }, 3000);
  } catch (e) {
    res.send(e);
  }
});
app.listen(port);
