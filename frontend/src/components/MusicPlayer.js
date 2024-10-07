// src/components/MusicPlayer.js

import React from 'react';

const MusicPlayer = () => {
  // Sample data for the track
  const track = {
    title: "Track Title",
    artist: "Artist Name",
    albumCover: "https://via.placeholder.com/300",
    lyrics: "Here are the lyrics to the song...",
  };

  return (
    <div className="music-player p-4">
      <img src={track.albumCover} alt={track.title} className="w-full h-auto mb-4" />
      <h1 className="text-2xl font-bold">{track.title}</h1>
      <h2 className="text-xl">{track.artist}</h2>
      <audio controls className="w-full mt-4">
        <source src="path/to/your/audio/file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="mt-4">
        <h3 className="font-semibold">Lyrics</h3>
        <p>{track.lyrics}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to Playlist</button>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Download</button>
    </div>
  );
};

export default MusicPlayer;
