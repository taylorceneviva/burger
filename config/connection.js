// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "tc472215#",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!" + connection.threadId);
});

module.exports = connection;
