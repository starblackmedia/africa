const express = require('express');
const { registerArtist } = require('../controllers/artistController'); // Make sure this controller function exists
const router = express.Router();

router.post('/register', registerArtist); // POST request to register artist

module.exports = router;
