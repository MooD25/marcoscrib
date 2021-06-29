const express = require("express");
const productmodel = require("../models/productmodel.js");
const router = express.Router();

//productlisting
router.get("/product/listing", (req, res) => {
  const allproducts = productmodel.getAllProducts();
  res.render("listingPage", {
    allproducts,
  });
});

//listings
router.get("/product/details", (req, res) => {
  res.render("propertyDetailsPage");
});

router.get("/product/:id", (req, res) => {
  const id = parseInt(req.params.id);

  res.render("propertyDetailsPage", {
    product: productmodel.getAProduct(id),
  });
});

module.exports = router;
