const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const asyncAwait = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

asyncAwait()