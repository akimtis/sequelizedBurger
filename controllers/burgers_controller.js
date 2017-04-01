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
});



router.post("/", function(req, res) {
  if (request.body.burger_name) {
    model.create({ burger_name: request.body.burger_name })
    .then(function() {
    response.redirect('/');
    });
  }
});


router.put("/devoured/:id", function(req, res) {
  // var condition = "id = " + req.params.id;
  console.log("condition", condition);
  console.log("req.body.devoured", req.body.devoured);
  model.update(
      {
        devoured: request.body.devoured
      },
      {
        where: {
          id: request.params.id
        }
      })
   .then(function() {
    res.redirect("/");
  });
});






module.exports = router;