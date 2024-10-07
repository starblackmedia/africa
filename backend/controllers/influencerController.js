const Influencer = require('../models/Influencer'); // Adjust the path as necessary

const registerInfluencer = async (req, res) => {
    const { influencerName, socialMediaPlatform } = req.body;

    try {
        const newInfluencer = new Influencer({ influencerName, socialMediaPlatform });
        await newInfluencer.save();
        res.status(201).json({ message: 'Influencer registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering influencer', error });
    }
};

module.exports = { registerInfluencer }; // Ensure this export is correct
