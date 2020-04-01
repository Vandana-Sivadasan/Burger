// config folder-use to connect to the db.
// views folder-hold the handlebar templates.
//controllers folder-controls the api routes.basically will connect front end to db.
//models folder-is the rules for writing to the db.
//database folder-create the data base.it will also create burger table.
//public folder-public assets and js.

// Require necessary MySQL, Node, Express, Handlebars and  ORM

// Requiring necessary npm packages:
const express = require('express');
var PORT = process.env.PORT || 8080;


// Requiring express-handlebars:
const exphbs = require('express-handlebars');