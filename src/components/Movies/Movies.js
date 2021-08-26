import React, { useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import testMovies from '../../utils/testMovies';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm />
        {isLoading ? <Preloader /> : <MoviesCardList movies={testMovies} />}
      </div>
    </section>
  );
}

export default Movies;
