import React, { useState } from 'react';
import logo from './logo.svg';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreList from './components/GengeList';
import './App.css';


function App() {
  const handleSearch = (searchQuery) => {
    console.log("Performing search for query:", searchQuery);
  };
  const [selectedGenre, setSelectedGenre] = useState('action');
  const genres = ['action', 'comedy', 'drama', 'horror'];

  const handleGenreSelect = genre => {
    setSelectedGenre(genre);
  };
  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm initialQuery="What do you want to watch?"
          onSearch={handleSearch} />
      <GenreList genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
    </div>
  );
}

export default App;
