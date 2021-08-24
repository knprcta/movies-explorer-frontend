import React, { useState } from 'react';
import './MoviesCard.css';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import SaveBtn from '../SaveBtn/SaveBtn';
import timeFormatter from '../../utils/timeFormatter';

function MoviesCard({ movie, inSavedLocation }) {
  const [isSaved, setIsSaved] = useState(false);
  const handleSave = () => setIsSaved(!isSaved);

  return (
    <article className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__text">
          <p className="movies-card__title">{movie.title}</p>
          <p className="movies-card__duration">
            {timeFormatter(movie.duration)}
          </p>
        </div>
        {inSavedLocation ? (
          <DeleteBtn />
        ) : (
          <SaveBtn isSaved={isSaved} onClick={handleSave} />
        )}
      </div>
      <div
        className="movies-card__image"
        style={{ backgroundImage: `url(${movie.image})` }}
      />
    </article>
  );
}

export default MoviesCard;
