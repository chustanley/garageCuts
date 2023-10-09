var mysql = require("mysql2");
var Promise = require("bluebird");

require("dotenv").config();
const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST } = process.env;

var connection = mysql.createConnection({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
});

//After promisifation, everything turns into Async
var db = Promise.promisifyAll(connection);

db.connectAsync()
  .then(() => {
    console.log("SUCCESSFULLY CONNECTED TO MYSQL");

    db.queryAsync("CREATE DATABASE IF NOT EXISTS to_do_list");
  })
  .then(() => {
    db.queryAsync("USE to_do_list");
  })
  .then(() => {
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS list (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, task VARCHAR(100) UNIQUE, description VARCHAR(100))",
    );
  })
  .catch(() => {
    console.log("UNSUCESSFUL");
  });

module.exports = db;
