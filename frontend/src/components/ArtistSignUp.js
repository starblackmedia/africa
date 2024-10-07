import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ArtistSignUp = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    artistName: '',
    genre: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      // Make POST request to register artist
      const response = await axios.post('http://localhost:5004/api/artists/register', formData);
      setMessage('Artist registered successfully! Proceed to onboarding.');
      console.log(response.data); // Check response from server
      
      // Redirect to onboarding page
      navigate('/artist-onboarding'); // Redirect to ArtistOnboarding component

    } catch (error) {
      // Enhanced error logging
      console.error('Error:', error.response ? error.response.data : error.message);
      setMessage('Error registering artist. Please try again.');
    } finally {
      setLoading(false); // Set loading back to false
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-pink-600">Artist Registration</h2>

      {/* Artist Name Input */}
      <label className="block text-sm font-medium text-gray-700">Artist Name</label>
      <input
        type="text"
        name="artistName"
        value={formData.artistName}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Enter your artist name"
        required
      />

      {/* Genre Input */}
      <label className="block text-sm font-medium text-gray-700">Genre</label>
      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Enter your genre (e.g., Pop, Jazz)"
        required
      />

      {/* Email Input */}
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Enter your email"
        required
      />

      {/* Password Input */}
      <label className="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Enter a secure password"
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
        {loading ? 'Registering...' : 'Register as Artist'}
      </button>
    </form>
  );
};

export default ArtistSignUp;
