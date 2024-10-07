const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  favoriteArtist: { type: String },
  // Other fan-specific fields
});

module.exports = mongoose.model('Fan', fanSchema);
