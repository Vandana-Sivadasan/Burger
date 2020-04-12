// config folder-use to connect to the db.
// views folder-hold the handlebar templates.
//controllers folder-controls the api routes.basically will connect front end to db.
//models folder-is the rules for writing to the db.
//database folder-create the data base.it will also create burger table.
//public folder-public assets and js.

// Require necessary MySQL, Node, Express, Handlebars and  ORM

var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//app.use(routes);
var routes = require("./controller/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});






