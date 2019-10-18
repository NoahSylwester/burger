// import packages
var express = require('express');
var router = express.Router();

// import model for its functions
var burger = require('../models/burger.js');

// create routes and logic
router.get("/", function(req, res) {
  burger.selectAll(function(receivedData) {
    var handlebarsObject = {
      burgers: receivedData
    };
    console.log(handlebarsObject);
    res.render('index', handlebarsObject);
  })
});

router.post("/api/burgers", function(req, res) {
  cat.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;