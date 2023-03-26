import React from 'react';

const GenreList = ({ genres, selectedGenre, onSelect }) => (
  <ul className='genresList'>
    {genres.map(genre => (
      <li
        key={genre}
        className={`genre-button ${genre === selectedGenre ? 'selected' : ''}`}
        onClick={() => onSelect(genre)}
      >
        {genre}
      </li>
    ))}
  </ul>
);

export default GenreList;
