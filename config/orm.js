// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(tableInput, burgerNameInput, cb) {
    var queryString = "INSERT INTO " + tableInput + " ('burger_name') VALUES ('" + burgerNameInput + "');";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(tableInput, burgerNameInput, cb) {
    var queryString = "UPDATE " + tableInput + " SET devoured=TRUE WHERE burger_name='" + burgerNameInput +"';";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
module.exports = orm;