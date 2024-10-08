import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import zxcvbn from 'zxcvbn'; 

const ArtistSignUp = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    artistName: '',
    genre: '',
    otherGenre: '', 
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === 'password') {
      const result = zxcvbn(value);
      setPasswordStrength(result.score);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const dataToSend = {
        ...formData,
        genre: formData.genre === 'Others' ? formData.otherGenre : formData.genre,
      };

      const response = await axios.post('http://localhost:5004/api/artists/register', dataToSend);
      setMessage('Artist registered successfully! Proceed to onboarding.');
      console.log(response.data); 

      navigate('/artist-onboarding'); 

    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setMessage(error.response ? error.response.data.error : 'Error registering artist. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="artist-signup-background">
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
        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        >
          <option value="">Select your genre</option>
          <option value="Afrobeat">Afrobeat</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="Pop">Pop</option>
          <option value="Ghana Music">Ghana Music</option>
          <option value="Rock">Rock</option>
          <option value="Amapiano">Amapiano</option>
          <option value="Jazz">Jazz</option>
          <option value="Classical">Classical</option>
          <option value="Reggae">Reggae</option>
          <option value="Electronic">Electronic</option>
          <option value="R&B">R&B</option>
          <option value="Country">Country</option>
          <option value="Others">Others</option>
        </select>

        {formData.genre === 'Others' && (
          <>
            <label className="block text-sm font-medium text-gray-700">Specify Other Genre</label>
            <input
              type="text"
              name="otherGenre"
              value={formData.otherGenre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your genre"
            />
          </>
        )}

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

        {/* Password Strength Display */}
        {formData.password && (
          <div className="text-sm text-gray-600">
            Password Strength: {['Weak', 'Fair', 'Good', 'Strong'][passwordStrength]}
          </div>
        )}

        {/* Message Display */}
        {message && (
          <p className={`text-sm ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'}`}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register as Artist'}
        </button>
      </form>
    </div>
  );
};

export default ArtistSignUp;
