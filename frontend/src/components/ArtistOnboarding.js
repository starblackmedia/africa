import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ArtistOnboarding = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [onboardingData, setOnboardingData] = useState({
    bio: '',
    socialLinks: '',
    profilePicture: null,
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOnboardingData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setOnboardingData((prevData) => ({ ...prevData, profilePicture: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const formData = new FormData();
    formData.append('bio', onboardingData.bio);
    formData.append('socialLinks', onboardingData.socialLinks);
    formData.append('profilePicture', onboardingData.profilePicture);

    try {
      // Make POST request to onboarding API
      const response = await axios.post('http://localhost:5004/api/artists/onboarding', formData);
      setMessage('Onboarding completed successfully!');
      console.log(response.data); // Check response from server
      
      // Redirect to the artist dashboard or another page
      navigate('/artist-dashboard'); // Redirect to Artist Dashboard component

    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setMessage('Error during onboarding. Please try again.');
    } finally {
      setLoading(false); // Set loading back to false
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-pink-600">Artist Onboarding</h2>

      {/* Bio Input */}
      <label className="block text-sm font-medium text-gray-700">Bio</label>
      <textarea
        name="bio"
        value={onboardingData.bio}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Tell us about yourself"
        required
      />

      {/* Social Links Input */}
      <label className="block text-sm font-medium text-gray-700">Social Links</label>
      <input
        type="text"
        name="socialLinks"
        value={onboardingData.socialLinks}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Enter your social media links (comma separated)"
        required
      />

      {/* Profile Picture Input */}
      <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        required
      />

      {/* Message Display */}
      {message && (
        <p className={`text-sm ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'}`}
        disabled={loading}
      >
        {loading ? 'Onboarding...' : 'Complete Onboarding'}
      </button>
    </form>
  );
};

export default ArtistOnboarding;
