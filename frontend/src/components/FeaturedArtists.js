import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlay } from '@fortawesome/free-solid-svg-icons';

const FeaturedArtists = ({ artists }) => {
  return (
    <section className="featured-artists py-8 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pl-4">Featured Artists</h2>
      <div className="artists-container flex overflow-x-scroll">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="artist-card relative flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-gray-300 min-w-[183px]"
          >
            <div className="relative group">
              <img
                src={artist.profileImage}
                alt={artist.name}
                className="rounded-full w-[183px] h-[183px] object-cover mb-2 border border-transparent transition-colors duration-300 hover:border-gray-300"
              />
              <button className="absolute bottom-2 right-2 bg-green-500 text-black p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:shadow-xl hover:bg-green-600 hover:scale-110">
                <FontAwesomeIcon icon={faPlay} size="lg" />
              </button>
            </div>
            <h3 className="text-lg font-semibold mb-2">{artist.name}</h3>
            <button className="bg-white text-gray-500 border border-black px-2 py-1 rounded-md flex items-center space-x-1 hover:bg-gray-100 transition duration-200 text-sm">
              <FontAwesomeIcon icon={faUserPlus} />
              <span>Follow</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtists;
