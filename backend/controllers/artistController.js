const Artist = require('../models/artistModel');
const bcrypt = require('bcrypt');

// Function to register a new artist
const registerArtist = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    
    const { artistName, genre, email, password } = req.body;

    // Validate input
    if (!artistName || !genre || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    console.log('Attempting to hash password:', password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword); // Log the hashed password

    // Create a new artist object
    const newArtist = new Artist({
      artistName,
      genre,
      email,
      password: hashedPassword, // Store hashed password
    });

    // Save the artist to the database
    await newArtist.save();
    res.status(201).json({ message: 'Artist registered successfully!' });
  } catch (error) {
    console.error('Error registering artist:', error);
    res.status(500).json({ error: 'Failed to register artist' });
  }
};

module.exports = { registerArtist };
