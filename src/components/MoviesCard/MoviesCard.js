import React from 'react';
import './MoviesCard.css';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import SaveBtn from '../SaveBtn/SaveBtn';
import timeFormatter from '../../utils/timeFormatter';

function MoviesCard({ movie, isSaved, inSavedLocation, onBtnClick }) {
  const isMovieSaved = isSaved(movie);

  const handleBtnClick = () => {
    onBtnClick(movie, isMovieSaved);
  };

  return (
    <article className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__text">
          <p className="movies-card__title">{movie.nameRU}</p>
          <p className="movies-card__duration">
            {timeFormatter(movie.duration)}
          </p>
        </div>
        {inSavedLocation ? (
          <DeleteBtn onClick={handleBtnClick} />
        ) : (
          <SaveBtn isSaved={isMovieSaved} onClick={handleBtnClick} />
        )}
      </div>
      <a
        className="movies-card__trailer"
        href={movie.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="movies-card__image"
          style={{ backgroundImage: `url(${movie.image})` }}
        />
      </a>
    </article>
  );
}

export default MoviesCard;
