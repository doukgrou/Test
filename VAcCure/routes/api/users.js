const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");



// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  
// Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      return res.status(400).json({ username: "Username already exists" });
    }
  });
  
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        hospitalName: req.body.hospitalName,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => res.json(user)).catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => { 
// Form validation
  const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;
  // Find user by username
    User.findOne({ username }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ 
        //username: "You have inserted incorrect Username or Password",
        password: "You have inserted incorrect Username or Password"
      });
    }
  
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        return res.status(400).json({
          //username: "You have inserted incorrect Username or Password",
          password: "You have inserted incorrect Username or Password"
        });   
      }
      else {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          hospitalName: user.hospitalName,
          address: user.address,
          city: user.city,
          country: user.country,
          phone: user.phone,
          email: user.email
        };
        // Sign token
        jwt.sign(payload, keys.secretOrKey, {expiresIn: 31556926 }, (err, token) => {
            res.json({success: true, token: "Bearer " + token});
        });
      }
    });
  });
});

// @route GET /profile
router.get("/dashboard", (req, res) => {
    const username = req.body.username
    User.findOne({ username }).then(user => {
      if (!user) {
        return res.status(404).json({ usernamenotfound: "error" });
      }
      res.json({
                hospitalName: user.hospitalName,
                address: user.address,
                city: user.city, 
                country: user.country,
                phone: user.phone,
                email: user.email
              })
    });
});


router.put("/dashboard", (req, res) => {

  User.updateOne({ _id: req.body._id }, req.body, message => {
      if (!message) {
         return res.json({message: 'updated.'});
      }else{
          return res.json({error: message});
      }
  });

});



module.exports = router;
