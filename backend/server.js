require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const influencerRoutes = require('./routes/influencerRoutes');
const artistRoutes = require('./routes/artistRoutes'); // Import the artist routes

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Middleware for parsing JSON bodies

// Load the MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB without deprecated options
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the influencer and artist routes
app.use('/api/influencers', influencerRoutes); // Register your influencer routes
app.use('/api/artists', artistRoutes); // Register your artist routes

const PORT = process.env.PORT || 5004; // Port for the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
