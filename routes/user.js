const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");
const User = require("../models/user");

router.post("/register", (req, res) => {
  User.registerUser(req.body.username, req.body.email, req.body.password, (err) => {
    let result;
    if(err) {
      result = {success: false};
    } else {
      result = {success: true};
    }
    res.json(result);
  });
});

router.post("/login", (req, res) => {
  User.validatePassword(req.body.username, req.body.password, (user, isMatch) => {
    if(!user) return res.json({success: false, msg: "User not found."});
    if(isMatch) {
      const token = jwt.sign(user.toJSON(), "secret", {expiresIn: 604800});
      res.json({
        success: true,
        token: "Bearer " + token,
        user: user
      });
    } else {
      return res.json({success: false, msg: "Wrong password."});
    }
  })
});

router.post("/update-rounds", expressJWT({secret: "secret"}), (req, res) => {
  User.updateRounds(req.body.id, req.body.rounds, (err) => {
    if(err) res.json({success: false});
    else res.json({success: true});
  });
});

module.exports = router;
