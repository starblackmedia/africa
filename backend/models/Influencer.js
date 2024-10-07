const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  influencerName: { type: String, required: true },
  socialMediaPlatform: { type: String, required: true },
  followersCount: { type: Number, required: true },
  niche: { type: String },
  // Other influencer-specific fields
});

module.exports = mongoose.model('Influencer', influencerSchema);
