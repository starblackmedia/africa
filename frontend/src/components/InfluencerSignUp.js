import React, { useState } from 'react';

const InfluencerSignUp = () => {
  const [formData, setFormData] = useState({
    influencerName: '',
    socialMediaPlatform: '',
    followersCount: '',
    niche: '',
    email: '',
    bio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // handle registration logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-green-600">Influencer Registration</h2>

      <label className="block text-sm font-medium text-gray-700">Influencer Name</label>
      <input
        type="text"
        name="influencerName"
        value={formData.influencerName}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Enter your influencer name"
      />

      <label className="block text-sm font-medium text-gray-700">Social Media Platform</label>
      <input
        type="text"
        name="socialMediaPlatform"
        value={formData.socialMediaPlatform}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Enter your platform (e.g., Instagram, YouTube)"
      />

      <label className="block text-sm font-medium text-gray-700">Number of Followers</label>
      <input
        type="number"
        name="followersCount"
        value={formData.followersCount}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Enter your follower count"
      />

      <label className="block text-sm font-medium text-gray-700">Niche</label>
      <input
        type="text"
        name="niche"
        value={formData.niche}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Enter your niche (e.g., fashion, tech)"
      />

      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Enter your email address"
      />

      <label className="block text-sm font-medium text-gray-700">Short Bio</label>
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Tell us a little about yourself"
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
      >
        Register as Influencer
      </button>
    </form>
  );
};

export default InfluencerSignUp;
