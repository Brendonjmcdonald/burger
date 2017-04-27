// Require Dependencies
var mysql = require("mysql");

// mySQL connection
if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "brendon1234!",
	database: "burgers_db"
});
};

connection.connect(function(err){
	if (err){
		throw(err);
	}else{
		console.log("Connected");
	}
});

// Exporting connection to use in other files
module.exports = connection;