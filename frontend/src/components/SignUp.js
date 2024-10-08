import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArtistSignUp from './ArtistSignUp';
import FanSignUp from './FanSignUp';
import InfluencerSignUp from './InfluencerSignUp';

const SignUp = () => {
  const [selectedUserType, setSelectedUserType] = useState(null);

  const renderSignUpForm = () => {
    switch (selectedUserType) {
      case 'artist':
        return <ArtistSignUp />;
      case 'fan':
        return <FanSignUp />;
      case 'influencer':
        return <InfluencerSignUp />;
      default:
        return <p className="text-lg text-gray-700 mt-4">Please select a user type to begin registration.</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Create Your Account</h1>

      {/* Buttons for user type selection */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-6 py-3 text-lg rounded-full font-medium transition-all 
            ${selectedUserType === 'artist' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} 
            hover:bg-yellow-500 hover:text-white`}
          onClick={() => setSelectedUserType('artist')}
        >
          Artist
        </button>
        <button
          className={`px-6 py-3 text-lg rounded-full font-medium transition-all 
            ${selectedUserType === 'fan' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} 
            hover:bg-yellow-500 hover:text-white`}
          onClick={() => setSelectedUserType('fan')}
        >
          Fan
        </button>
        <button
          className={`px-6 py-3 text-lg rounded-full font-medium transition-all 
            ${selectedUserType === 'influencer' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} 
            hover:bg-yellow-500 hover:text-white`}
          onClick={() => setSelectedUserType('influencer')}
        >
          Influencer
        </button>
      </div>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {renderSignUpForm()}
      </div>

      {/* Login prompt */}
      <div className="mt-6">
        <p className="text-gray-700 text-base">
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
