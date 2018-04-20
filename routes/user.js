const express = require("express");
const router = express.Router();
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

module.exports = router;
