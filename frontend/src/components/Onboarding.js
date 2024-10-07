import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Onboarding = () => {
  const [formData, setFormData] = useState({
    profilePicture: '',
    bio: '',
  });
  const [userData, setUserData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    if (type === 'file' && files.length > 0) {
      setImagePreview(URL.createObjectURL(files[0])); // Set image preview
    }

    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.profilePicture && !formData.bio) {
      setError('Please upload a profile picture or write a bio.');
      return;
    }

    setLoading(true);
    const token = localStorage.getItem('token');
    const formDataToSend = new FormData();
    formDataToSend.append('profilePicture', formData.profilePicture);
    formDataToSend.append('bio', formData.bio);

    try {
      const response = await axios.post('http://localhost:5004/api/userdata', formDataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Response from server:', response.data);
      fetchUserData(); // Fetch updated user data after submission
    } catch (error) {
      setError('Failed to submit data. Please try again.');
      console.error('Error submitting onboarding data:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data
  const fetchUserData = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if token is not found
      return;
    }

    try {
      const response = await axios.get('http://localhost:5004/api/userdata', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token'); // Clear invalid token
        navigate('/login'); // Redirect to login page
      } else {
        console.error('Error fetching user data:', error.response ? error.response.data : error.message);
      }
    }
  }, [navigate]);

  // Handle skip action
  const handleSkip = () => {
    localStorage.setItem('onboardingSkipped', 'true'); // Optionally store a flag
    navigate('/artist-dashboard'); // Navigate to the artist dashboard
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h2>
        {userData ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Profile</h3>
            {userData.profilePicture && (
              <img src={userData.profilePicture} alt="Profile" className="mb-4 w-full h-auto" />
            )}
            {userData.bio && <p className="mb-4">Bio: {userData.bio}</p>}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="profilePicture" className="block font-semibold mb-1">Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              {imagePreview && (
                <div className="mt-4">
                  <img src={imagePreview} alt="Preview" className="w-full h-auto" />
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block font-semibold mb-1">Bio</label>
              <textarea
                name="bio"
                id="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button 
              type="submit" 
              className={`w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Finish'}
            </button>
          </form>
        )}
        <button 
          onClick={handleSkip} 
          className="w-full text-blue-500 mt-4 text-center hover:underline"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
