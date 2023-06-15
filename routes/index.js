const express = require('express');

const router = express.Router();

// HTTP GET - ROOT ROUTE OF OUR APPLICATION
router.get('/', (req, res) => {
    // res.send("Welcome to Blog App");
    res.render("home/index", { welcoemMessage: "Welcome to Blog App" });
});


module.exports = router;