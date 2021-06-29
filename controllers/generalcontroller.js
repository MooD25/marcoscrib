const express = require('express');
const productmodel = require('../models/productmodel.js');
const router = express.Router();

//routes
router.get("/" ,(req,res)=>{

    const featuredproducts = productmodel.getFeaturedProducts();
    const locationSort     = productmodel.sortByLocation();
    res.render("home",{
        featuredproducts,
        locationSort
    })
});

//login
router.get("/error" ,(req,res)=>{
    res.render("error")
});



module.exports = router;