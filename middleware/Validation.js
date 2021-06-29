module.exports = {
    validateLoginNull(req, res, next) {
      if (req.body.email == '' || 
          req.body.pw == ''
          ) {
              res.render("login", {
                errorMsg : "Forms must be filled out",
                loginValue: req.body.email,
                pwValue : req.body.pw
              })
      }
      else next();
    },
    validateLoginPw(req, res, next) {
      const pwRe = new RegExp(/^[a-z0-9]{6,12}/i)
      if (!pwRe.test(req.body.pw)) {
  
        res.render("login", {
          errorMsg : "Password invalid, must have 6-12 characters or numbers",
          loginValue: req.body.email,
          pwValue : req.body.pw
        })
      }
      else next();
    },
    validateLoginEmail(req, res, next) {
      const emailRe = new RegExp(/[@]/)
      if (!emailRe.test(req.body.email)) {
        res.render("login", {
          errorMsg : "Login email invalid, must have @",
          loginValue: req.body.email,
          pwValue : req.body.pw
        })
      }
      else next();
    },
    validateRegisterNull(req, res, next) {
      if (req.body.fname == '' || 
          req.body.lname == '' || 
          req.body.pw == '' || 
          req.body.cfpw == ''
          ) {
              res.render("Customer-Registration", {
                errorMsg : "Forms must be filled out",
                cfpwValue : req.body.cfpw,
                pwValue : req.body.pw,
                lname : req.body.lname,
                fname : req.body.fname
              })
      }
      else next();
    },
    validateRegisterPw(req, res, next) {
      const pw = new RegExp(/^[a-z0-9]{6,12}/i)
      if (!pw.test(req.body.pw)) {
  
        res.render("Customer-Registration", {
          errorMsg : "Password invalid, must have 6-12 characters or numbers",
          cfpwValue : req.body.cfpw,
          pwValue : req.body.pw,
          lname : req.body.lname,
          fname : req.body.fname
        })
      }
      else next();
    },
    validateRegisterCfpw(req, res, next) {
      if (req.body.pw !== req.body.cfpw) {
        res.render("Customer-Registration", {
          errorMsg : "Your passwords do not match",
          cfpwValue : req.body.cfpw,
          pwValue : req.body.pw,
          lname : req.body.lname,
          fname : req.body.fname
        })
      }
      else next();
    },
    
  };
  