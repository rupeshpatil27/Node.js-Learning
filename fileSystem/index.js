const express = require("express");
const app = express();
const port = 3000;


app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



// create empty file

var fs = require('fs');

// fs.open('demoEmpty.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// }); 


// create empty file and add text

fs.writeFile('demoEmpty.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 