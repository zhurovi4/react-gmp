import React from 'react';

const GenreList = ({ genres, selectedGenre, onSelect }) => (
  <div>
    {genres.map(genre => (
      <button
        key={genre}
        style={{ fontWeight: genre === selectedGenre ? 'bold' : 'normal' }}
        onClick={() => onSelect(genre)}
      >
        {genre}
      </button>
    ))}
  </div>
);

export default GenreList;
