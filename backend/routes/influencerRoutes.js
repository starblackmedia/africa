const express = require('express');
const router = express.Router();
const { registerInfluencer } = require('../controllers/influencerController');

// Define the registration route
router.post('/register', registerInfluencer);

module.exports = router; // Ensure the router is exported correctly
