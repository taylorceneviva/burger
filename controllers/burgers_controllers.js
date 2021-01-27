// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js")

//get: get data, put into object, pass into view
router.get('/', function(req, res) {
    burger.all(function(data){

        var hbsObject = {
            burgers:data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });

});

//post: calls data layer, creates new, send back edge case.
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_names", "devoured"], [req.body.name, req.body.burger_names], function(result) {

      res.json({ id: result.insertId });
      
    });
  });


//put
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
  
    burger.update({devoured: req.body.devoured}, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;