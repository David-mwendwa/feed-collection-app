const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    require: true
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User