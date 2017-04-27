// Requiring Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var path = require("path");

// Require other files
var connection = require("./config/connection.js");
var orm = require("./config/orm.js");


// Express
var app = express();

var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname + "/public/test.html"));
});

app.get("/", function(req, res){
	orm.selectAll(function(results){
		res.json(results);
	});
});


app.post("/", function(req, res){
	orm.insertOne(req.body.id)
});

// Server listening
app.listen(PORT, function(){
	console.log("Listening on PORT: " + PORT);
});

