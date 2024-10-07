const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Optional: Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
