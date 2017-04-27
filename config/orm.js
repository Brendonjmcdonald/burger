// Requiring Dependencies
var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(amount, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [amount, tableInput], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(name) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES(??) ";
    console.log(queryString);
    connection.query(queryString, [name], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(devoured) {
    var queryString = "UPDATE burgers SET devoured = ??";

    connection.query(queryString, [devoured], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;