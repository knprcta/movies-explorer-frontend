import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  movies,
  isSaved,
  onBtnClick,
  onSearch,
  filter,
  handleFilter,
  isLoading,
  count,
  handleDisplayMore,
  isInitialMsg,
}) {
  const moviesToRender = movies.slice(0, count);

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm
          onSearch={onSearch}
          filter={filter}
          handleFilter={handleFilter}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {isInitialMsg ? (
              <p className="movies__message">
                Введите ключевое слово или нажмите на кнопку поиска, чтобы
                загрузить все фильмы
              </p>
            ) : (
              <>
                <MoviesCardList
                  movies={moviesToRender}
                  isSaved={isSaved}
                  onBtnClick={onBtnClick}
                />
                {moviesToRender.length < movies.length ? (
                  <button
                    className="movies__more-btn"
                    type="button"
                    onClick={handleDisplayMore}
                  >
                    Ещё
                  </button>
                ) : null}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Movies;
