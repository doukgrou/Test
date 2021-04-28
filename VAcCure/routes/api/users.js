const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

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
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
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
      return res.status(404).json({ usernamenotfound: "username or Password is incorrect" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          hospitalName: user.hospitalName
        };

        // Sign token
        jwt.sign(payload, keys.secretOrKey, {expiresIn: 31556926 }, (err, token) => {
            res.json({success: true, token: "Bearer " + token});
        });
        
      }
      else return res.status(400).json({ passwordincorrect: "username or Password is incorrect" });
      
    });
  });
});

router.get("/profile", (req, res) => {
  const username = req.body.username
  User.findOne({ username }).then(user => {
    if (!user) {
      return res.status(404).json({ usernamenotfound: "error" });
    }

    res.json(
            {
              hospitalName: user.hospitalName,
              address: user.address,
              city: user.city, 
              country: user.country,
              phone: user.phone,
              email: user.email
            })
  });

  

});

module.exports = router;
