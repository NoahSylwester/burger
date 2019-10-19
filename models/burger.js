var orm = require('../config/orm.js');

var burger = 
{
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(nameInput, cb) {
    orm.insertOne("burgers", nameInput, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerName, cb) {
    orm.updateOne("burgers", burgerName, function(res) {
      cb(res);
    });
  },
  deleteOne: function() {
    orm.deleteOne("burgers", burgerName, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;