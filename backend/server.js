// server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001; // Set the port to use from environment variable or default to 5000

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Simple route to test the server
app.get('/', (req, res) => {
    res.send('Welcome to the Music App API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
