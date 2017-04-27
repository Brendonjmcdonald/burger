var orm = require("./config/orm.js");

// Adds new burger name
orm.insertOne("");

// finds all burgers.
orm.selectAll("*", "burgers");

// Update to devoured
orm.updateOne("true");
