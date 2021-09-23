import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, isSaved, onBtnClick, inSavedLocation }) {
  return (
    <>
      {!movies.length ? (
        <p className="movies-card-list__not-found">Ничего не найдено</p>
      ) : (
        <ul className="movies-card-list">
          {movies.map((item) => (
            <li
              className="movies-card-list__item"
              key={item.id || item.movieId}
            >
              <MoviesCard
                movie={item}
                inSavedLocation={inSavedLocation}
                onBtnClick={onBtnClick}
                isSaved={isSaved}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesCardList;
