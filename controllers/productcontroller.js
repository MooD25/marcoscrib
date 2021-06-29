const express = require("express");
const productmodel = require("../models/productmodel.js");
const router = express.Router();

//productlisting
router.get("/product/listing", (req, res) => {
  const allproducts = productmodel.getAllProducts();
  res.render("listing-page", {
    allproducts,
  });
});

//listings
router.get("/product/details", (req, res) => {
  res.render("property-details-page");
});

router.get("/product/:id", (req, res) => {
  const id = parseInt(req.params.id);

  res.render("Property-Details-Page", {
    product: productmodel.getAProduct(id),
  });
});

module.exports = router;
