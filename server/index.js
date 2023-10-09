const express = require("express");
/*
Express is a web app framework for Node.js
*/
const app = express();
const db = require("../database/index.js");

var path = require("path");

app.use(express.static(path.join(__dirname, "/../client/src")));
//Express.json() parses the passed in object into a js object in the req.body
app.use(express.json());

app.listen(3000, () => {
  console.log("SUCCESSFULLY CONNECTED TO LOCALHOST @ PORT 3000");
});
