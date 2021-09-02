import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

function SavedMovies({
  movies,
  isSaved,
  onBtnClick,
  onSearch,
  filter,
  handleFilter,
  isLoading,
}) {
  const location = useLocation();
  const inSavedLocation = location.pathname === '/saved-movies';

  return (
    <section className="saved-movies">
      <div className="saved-movies__container">
        <SearchForm
          onSearch={onSearch}
          filter={filter}
          handleFilter={handleFilter}
          inSavedLocation={inSavedLocation}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            isSaved={isSaved}
            onBtnClick={onBtnClick}
            inSavedLocation={inSavedLocation}
          />
        )}
      </div>
    </section>
  );
}

export default SavedMovies;
