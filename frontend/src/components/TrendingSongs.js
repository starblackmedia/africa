import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingCart, faPlay } from '@fortawesome/free-solid-svg-icons';

// Sample data for trending songs
const trendingSongs = [
  {
    title: "Lungu Boy",
    artist: "Asake",
    coverImage: require('../assets/Asake-Lungu-Boy.png'),
    link: "http://example.com/lungu-boy",
  },
  {
    title: "Love Bird",
    artist: "Gyakie",
    coverImage: require('../assets/Gyakie.png'),
    link: "http://example.com/love-bird",
  },
  {
    title: "Stubborn ft Asake",
    artist: "Victony",
    coverImage: require('../assets/Victony-in-Stubborn.jpg'),
    link: "http://example.com/stubborn-ft-asake",
  },
  {
    title: "Love Damini",
    artist: "Burna Boy",
    coverImage: require('../assets/Love-Damini-cover.jpeg'),
    link: "http://example.com/love-damini",
  },
  {
    title: "Irawo",
    artist: "Seyi Shay",
    coverImage: require('../assets/seyishay.png'),
    link: "http://example.com/irawo",
  },
  {
    title: "Local",
    artist: "Sunny J Widthasauce",
    coverImage: require('../assets/seyishay.png'),
    link: "http://example.com/local",
  },
];

const TrendingSongs = () => {
  return (
    <section className="trending-songs py-8 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pl-4">Trending Songs</h2>
      <div className="songs-container flex overflow-x-scroll space-x-4">
        {trendingSongs.map((song, index) => (
          <div
            key={index}
            className="song-card relative flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-gray-300 min-w-[220px]"
          >
            {/* Song Cover Image */}
            <div className="relative group">
              <img
                src={song.coverImage}
                alt={song.title}
                className="w-[220px] h-[220px] object-cover mb-2 rounded-lg border border-transparent transition duration-300 transform group-hover:scale-105"
              />
              <a href={song.link} target="_blank" rel="noopener noreferrer">
                <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlay} className="text-white text-4xl" />
                </div>
              </a>
            </div>
            {/* Song Title and Artist */}
            <h3 className="text-lg font-semibold">{song.title}</h3>
            <p className="text-sm text-gray-600">{song.artist}</p>
            <div className="mt-2 flex space-x-2">
              <button className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8">
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSongs;
