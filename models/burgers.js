const orm = require("../config/orm.js");

let burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(result) {
        callback(result);
    });
  },
  create: function(name, callback) {
    orm.insertOne("burgers", "burger_name", name, function(result) {
        callback(result); 
    });
  },
  update: function(id, callback) {
    orm.updateOne("burgers", "devoured", id, function(result) {
        callback(result);
    });
  },
  delete: function(id, callback) {
    orm.deleteOne("burgers", id, function(result) {
      callback(result);
    }) 
  }
};

module.exports = burger;
