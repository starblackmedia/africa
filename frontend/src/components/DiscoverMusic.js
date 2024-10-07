// src/components/DiscoverMusic.js

import React from 'react';

const DiscoverMusic = () => {
  // Sample data for music
  const musicList = [
    { title: "Song 1", artist: "Artist A", genre: "Pop", id: 1 },
    { title: "Song 2", artist: "Artist B", genre: "Rock", id: 2 },
    { title: "Song 3", artist: "Artist C", genre: "Jazz", id: 3 },
  ];

  return (
    <div className="discover-music p-4">
      <h1 className="text-2xl font-bold">Discover Music</h1>
      <div className="filters mt-4">
        <h2 className="text-xl">Filter by:</h2>
        {/* Add filter options here */}
        <select className="mt-2">
          <option value="">Select Genre</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          {/* Add more genres as needed */}
        </select>
      </div>
      <section className="music-list mt-4">
        <h2 className="text-xl font-semibold">Available Music</h2>
        <div className="grid grid-cols-2 gap-4">
          {musicList.map((music) => (
            <div key={music.id} className="music-item border p-2">
              <h3 className="text-lg">{music.title}</h3>
              <p>{music.artist}</p>
              <p>{music.genre}</p>
              <button className="bg-blue-500 text-white py-1 px-2 mt-2">Play</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DiscoverMusic;
