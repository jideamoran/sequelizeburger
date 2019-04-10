var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// serve static content for the app, using the "public" folder

app.use(express.static("public"));

// parse application body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server to begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening: http://localhost:" + PORT)
});