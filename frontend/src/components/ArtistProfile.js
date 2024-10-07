const ArtistProfile = ({ artist }) => {
  // Log the artist prop to ensure it's passed correctly
  console.log('Artist Profile Props:', artist);

  const profileImageUrl = artist?.profileImageUrl || 'https://via.placeholder.com/150';
  const artistName = artist?.name || 'Artist Name';
  const genre = artist?.genre || 'Genre not specified';
  const bio = artist?.bio || 'This artist has no biography available.';
  const topAlbums = artist?.topAlbums || [];
  const followers = artist?.followers || 0;
  const albums = artist?.albums || 0;
  const concerts = artist?.concerts || 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Profile Image and Basic Info */}
      <div className="flex items-center">
        <img
          src={profileImageUrl}
          alt={artistName}
          className="w-32 h-32 rounded-full mr-6 shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{artistName}</h2>
          <p className="text-gray-500">Genre: {genre}</p>
          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            <button className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter"></i> Twitter
            </button>
            <button className="text-blue-700 hover:text-blue-900">
              <i className="fab fa-facebook"></i> Facebook
            </button>
            <button className="text-pink-500 hover:text-pink-700">
              <i className="fab fa-instagram"></i> Instagram
            </button>
          </div>
        </div>
      </div>

      {/* Artist Bio */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">Biography</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">{bio}</p>
      </div>

      {/* Top Albums */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">Top Albums</h3>
        <ul className="mt-2 space-y-1">
          {topAlbums.length > 0 ? (
            topAlbums.map((album, index) => (
              <li key={index} className="text-gray-600">{album.title} - Released in {album.year}</li>
            ))
          ) : (
            <li className="text-gray-600">No albums available.</li>
          )}
        </ul>
      </div>

      {/* Artist Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <h4 className="text-lg font-semibold text-gray-700">{followers}</h4>
          <p className="text-gray-500">Followers</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-700">{albums}</h4>
          <p className="text-gray-500">Albums</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-700">{concerts}</h4>
          <p className="text-gray-500">Concerts</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
