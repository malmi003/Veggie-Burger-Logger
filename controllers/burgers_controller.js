let express = require("express");
let burger = require("../models/burger");

let router = express.Router();

// get route to render the page from handlebars
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
       let hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// post route to add new items to DB and then return a response that I can then post to the page?
router.post("/api/burgers/", function (req, res) {
    console.log(req.body.burger_name);
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        res.json({ id: result.insertId })
    });
});

// put route to update items in db and send new list of all items to render on page
router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Is rendering on page just a matter of refreshing the page?

module.exports = router;