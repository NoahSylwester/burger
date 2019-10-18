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

module.exports = router;