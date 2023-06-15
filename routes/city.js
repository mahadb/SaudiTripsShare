const express = require('express')
const router = express.Router()
const isLoggedIn = require("../helper/isLoggedin")
const Post = require("../models/Post");


// all instractor
router.get('city/index', (req, res) => {
    Instractor.find()
        .then(cities => {
            res.render('city/index', { cities })
        })
        .catch(err => res.send(err))

})

// add instractor page 
router.get('/city/add', (req, res) => {

    res.render('city/add')
})

router.post('/add', (req, res) => {

    let newCity = new City(req.body)

    newCity.save()
        .then(() => res.redirect('/manage'))
        .catch(err => res.send(err))
})

//show 
router.get('/:city', (req, res) => {
    // City.findById(req.params.id).populate('posts')
    //     .then(city => {
    //         console.log(city)
    //         res.render('city/show', { city })
    //     })

    // let city = req.params.city
    // console.log(city)
    // res.render("home/city",{city})
    // Post.find(city)

    Post.find({ city: { $ne: req.params.city } })
        .then(city => {
            res.render("home/city", { city });
        })
        .catch(err => {
            console.log(err);
        })



})


module.exports = router;