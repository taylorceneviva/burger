// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "yo1a4jrmz20fyi03",
  password: "ed9ci50x9ongyfow",
  database: "m6566o6x1jniopdu"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!" + connection.threadId);
});

module.exports = connection;
