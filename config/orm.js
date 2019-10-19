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
    var queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES ('" + burgerNameInput + "');";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(tableInput, burgerIdInput, cb) {
    var queryString = "UPDATE " + tableInput + " SET devoured=TRUE WHERE id='" + burgerIdInput +"';";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });    
  },
  deleteOne: function(tableInput, burgerIdInput, cb) {
    var queryString = "DELETE FROM " + tableInput + " WHERE id='" + burgerIdInput +"';";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });    
  }
};
module.exports = orm;