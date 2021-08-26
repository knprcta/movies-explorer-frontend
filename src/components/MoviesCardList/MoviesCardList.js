import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies }) {
  const location = useLocation();
  const inSavedLocation = location.pathname === '/saved-movies';

  return (
    <div className="movies-card-list__wrapper">
      <ul className="movies-card-list">
        {movies.map((item) => (
          <li className="movies-card-list__item" key={item.id}>
            <MoviesCard
              key={item.id}
              movie={item}
              inSavedLocation={inSavedLocation}
            />
          </li>
        ))}
      </ul>
      <button className="movies-card-list__more-btn">Ещё</button>
    </div>
  );
}

export default MoviesCardList;
