// require express

var express = require("express");

var router = express.Router();

// require/import burger.js

var burger = require("../models/burger.js")



router.get("/", function(req, res) {

    burger.all(function(data) {
        var hbsObject = {

            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);

    });
});

router.post("/api/burger", function(req, res) {
    burger.create([
        "name", "eat"
    ], [
        req.body.name, req.body.eat
    ], function(result) {
        // send back name of burger
        res.json({ id: result.insertId });
    });
});


// NEED TO FINISH ROUTERS

router.put("/api/burger:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({ 
        burger: req.body.burger

    }, condition, function(result) {

        if (result.changedRows == 0) {
            // if nothing changed, ID doesn't exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });;
})

module.exports = router;


