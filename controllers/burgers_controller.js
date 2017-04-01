var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("hitting home route");
  burger.findAll().then(function(data) {
  console.log("burgers object :", data)

    var hbsObject = {
      burgers: data
    };
    console.log("burgers data:", hbsObject);
    res.render("index", hbsObject);
  });
  // burger.findAll({}, function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
  //   console.log("burgers data:", hbsObject);
  //   res.render("index", hbsObject);
  // });
});



router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log("req.body.devoured", req.body.devoured);
  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("deleting burger")
  burger.delete(condition, function() {
    res.redirect("/");
  });
});




module.exports = router;