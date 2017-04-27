// Require Dependencies
var mysql = require("mysql");

// mySQL connection
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "brendon1234!",
	database: "burgers_db"
});

connection.connect(function(err){
	if (err){
		throw(err);
	}else{
		console.log("Connected as " + connection.port);
	}
});

// Exporting connection to use in other files
module.exports = connection;