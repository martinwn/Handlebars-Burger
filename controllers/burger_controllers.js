const express = require("express");
const router = express.Router();
const burger = require("../models/burgers");

router.get("/", function(request, response) {
    burger.all(function(data) {
      let hbsObject = {
        burgers: data
      };
      response.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(request, response) {
    console.log(request.body.name);
    burger.create(request.body.name, function(result) {
        response.json(result);
    });
});

router.put("/api/burgers/:id", function (request, response) {
    burger.update(request.params.id, function(result) {
        response.json(result);
    });
});

router.delete('/api/burgers/:id', function(request, response) {
    burger.delete(request.params.id, function(result) {
        response.json(result);
    })
})

module.exports = router;   
  
