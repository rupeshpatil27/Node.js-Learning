const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const checkMiddleware = function (req, res, next) {
  req.txt = "check middleware";
  next();
};

app.use(checkMiddleware);

app.get("/", (req, res) => {
  let responseText = req.txt;
  res.send(responseText);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
