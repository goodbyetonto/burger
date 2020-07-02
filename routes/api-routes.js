// DEPENDENCIES
// ===============================================================

// const express = require('express');
// const router = express.Router();
const db = require('../models');

// Routes
// =============================================================
module.exports = (app) => {

    // Create all our routes and set up logic within those routes where required.
    app.get("/", (req, res) => {
        db.burger.findAll({}).then((results) => {
            const hbsObject = {
                burger: results
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/api/new", (req, res) => {
        console.log("New Burger Added:"); 
        console.log("req.body"); 
        db.burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        })
        .then((results) => {
            // Send back the ID of the new burger
            res.json(results);
        });
    });

    app.put("/api/burger/:id", (req, res) => {
        var devoured = "id = " + req.params.id;

        console.log("devoured", devoured);

        burger.update({ devoured: req.body.devoured }, condition, (result) => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
}


