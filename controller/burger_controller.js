var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js")

// get route -> index
router.get("/", function (req, res) {
  console.log("routehit")
  // express callback response by calling burger.selectAllBurger
  burger.all(function (burgerData) {
    console.log("/burger", burgerData)
    //wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("burger", { burger_data: burgerData });
  });
});

//Make a route that can post new burgers to the database
router.post("/burger", function (req, res) {
  console.log("burger route hit");
  console.log(req.body)
  burger.create(req.body.burger_name, function(result) {
    
    console.log(result);
    res.redirect("/");
  });

});



module.exports = router;