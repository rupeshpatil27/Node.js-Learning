import jwt from "jsonwebtoken";
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const generateToken = function () {
  const token = jwt.sign("this demo text", "secrete key");

  console.log(token);
};

generateToken();

const generateTokenWithTime = function () {
  const token = jwt.sign({name:"this demo text"}, "secrete key", {
    expiresIn: 60 * 60,
  });

  console.log(token);
};

generateTokenWithTime();
