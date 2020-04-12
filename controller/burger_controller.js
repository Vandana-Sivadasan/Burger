var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js")

// get route -> index
router.get("/", function(req, res) {

    // express callback response by calling burger.selectAllBurger
    burger.all(function(burgerData) {
        console.log ("/burger",burgerData)
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      res.render("index", { burger_data: burgerData });
    });
  });

 

module.exports = router;