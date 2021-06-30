const express = require('express')
const validation = require("../middleware/validation.js")
const router = express.Router()

//registration
router.get("/user/customerRegistration" ,(req,res)=>{
    res.render("customerRegistration")
});


router.post("/user/customerRegistration", validation.validateRegisterNull, validation.validateRegisterPw, validation.validateRegisterCfpw, (req, res, next) =>{ 
   res.redirect("/");
})


//login
router.get("/user/login" ,(req,res)=>{
    res.render("login")
});

router.post("/user/login", validation.validateLoginNull, validation.validateLoginEmail, validation.validateLoginPw, (req, res, next) =>{ 
    res.redirect("/");
})



module.exports = router;
