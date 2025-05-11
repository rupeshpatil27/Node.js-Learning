const express = require("express");
var nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 4000,
  secure: true,
  auth: {
    user: "your Email id",
    pass: "Your Password",
  },
});

const option = {
  from: "your Email id",
  to: "client email id",
  subject: "nodemailer check",
  html: "message",
};

transporter.sendMail(option, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
