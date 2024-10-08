const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ['artist', 'fan', 'influencer'],
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
