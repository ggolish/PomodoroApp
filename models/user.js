const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model("User", userSchema);

module.exports.registerUser = function(username, email, password, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if(err) throw err;
    bcrypt.hash(password, salt, (err, hash) => {
      if(err) throw err;
      let user = new User({
        username: username,
        email: email,
        password: hash
      });
      user.save(callback);
    });
  });
}

module.exports.validatePassword = function(username, password, callback) {
  User.findOne({username: username}, (err, user) => {
    if(err) throw err;
    if(!user) {
      callback(null, false);
      return;
    }
    bcrypt.compare(password, user.password, (err, res) => {
      if(err) throw err;
      callback(user, res);
    });
  });
}
