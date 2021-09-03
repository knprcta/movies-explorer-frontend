import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory, Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Popup from '../Popup/Popup';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import fail from '../../images/fail.svg';
import './App.css';
import {
  SHORT_DURATION,
  DESKTOP_COUNT,
  DESKTOP_ADD_COUNT,
  TABLET_COUNT,
  TABLET_ADD_COUNT,
  MOBILE_COUNT,
  MOBILE_ADD_COUNT,
} from '../../utils/constants';

function App() {
  const location = useLocation();
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [filter, setFilter] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMsg, setPopupMsg] = useState('');
  const [popupStatus, setPopupStatus] = useState(false);
  const [isInitialMsg, setInitialMsg] = useState(true);

  function closePopup() {
    setIsPopupOpen(false);
  }

  const initialMoviesCount =
    width > 800 ? DESKTOP_COUNT : width > 505 ? TABLET_COUNT : MOBILE_COUNT;

  const [displayedMoviesCount, setDisplayedMoviesCount] =
    useState(initialMoviesCount);

  function getUserInfo(token) {
    mainApi
      .getUserInfo(token)
      .then((info) => {
        setCurrentUser(info);
      })
      .catch((err) => {
        console.log(err);
        setPopupStatus(false);
        setPopupMsg(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и перезагрузите страницу'
        );
        setIsPopupOpen(true);
      });
  }

  function getMovies() {
    const localMovies = localStorage.getItem('movies');
    if (localMovies) {
      const localMoviesArr = JSON.parse(localMovies);
      if (localMoviesArr.length) {
        setMovies(localMoviesArr);
      }
    } else {
      moviesApi
        .getMovies()
        .then((res) => {
          const moviesArr = res.map((item) => {
            return {
              country: item.country || 'Страна',
              director: item.director || 'Режиссёр',
              duration: item.duration || 0,
              year: item.year || 'Год',
              description: item.description || 'Описание',
              image: `https://api.nomoreparties.co${item.image.url}` || fail,
              trailer: item.trailerLink
                ? item.trailerLink.includes('https')
                  ? item.trailerLink
                  : 'http://example.com'
                : 'http://example.com',
              thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
              movieId: item.id || Math.floor(Math.random() * 10000),
              nameRU: item.nameRU || 'Название фильма',
              nameEN: item.nameEN || 'Name',
            };
          });
          localStorage.setItem('movies', JSON.stringify(moviesArr));
          setMovies(moviesArr);
        })
        .catch((err) => {
          console.log(err);
          setPopupStatus(false);
          setPopupMsg(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и перезагрузите страницу'
          );
          setIsPopupOpen(true);
        });
    }
  }

  function getSavedMovies(token) {
    const localMovies = localStorage.getItem('savedMovies');
    if (localMovies) {
      const localMoviesArr = JSON.parse(localMovies);
      if (localMoviesArr.length) {
        setSavedMovies(localMoviesArr);
      }
    } else {
      mainApi
        .getSavedMovies(token)
        .then((res) => {
          if (res) {
            localStorage.setItem('savedMovies', JSON.stringify(res));
            setSavedMovies(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function getAllUserData(token) {
    Promise.all([getUserInfo(token), getMovies(), getSavedMovies(token)]);
  }

  function filterMovies(movies, keyword) {
    return movies.filter(({ nameRU, nameEN }) => {
      if (!keyword) {
        return true;
      }
      if (typeof nameRU !== 'string' || typeof nameEN !== 'string') {
        return false;
      }
      const ru = nameRU.toLowerCase();
      const en = nameEN.toLowerCase();
      const word = keyword.toLowerCase();
      return ru.indexOf(word) !== -1 || en.indexOf(word) !== -1;
    });
  }

  function handleSearchMovies(keyword) {
    setIsLoading(true);
    setDisplayedMoviesCount(initialMoviesCount);
    setTimeout(() => {
      const findedMovies = filterMovies(movies, keyword);
      setFilteredMovies(findedMovies);
      setInitialMsg(false);
      setIsLoading(false);
    }, 700);
  }

  function handleSearchSavedMovies(keyword) {
    setIsLoading(true);
    setTimeout(() => {
      const findedMovies = filterMovies(savedMovies, keyword);
      setFilteredSavedMovies(findedMovies);
      setIsLoading(false);
    }, 700);
  }

  function handleFilter() {
    setFilter(!filter);
  }

  function filterDuration(movie) {
    return filter ? movie.duration <= SHORT_DURATION : true;
  }

  function handleSaveMovie(movie) {
    const jwt = localStorage.getItem('jwt');

    mainApi
      .addMovie(movie, jwt)
      .then((res) => {
        if (res) {
          const addedMovie = [...savedMovies, res];
          localStorage.setItem('savedMovies', JSON.stringify(addedMovie));
          setSavedMovies(addedMovie);
        }
      })
      .catch((err) => {
        console.log(err);
        setPopupStatus(false);
        setPopupMsg('Произошла ошибка при сохранении фильма.');
        setIsPopupOpen(true);
      });
  }

  function handleDeleteMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    const id = savedMovies.find((item) => item.movieId === movie.movieId)._id;

    mainApi
      .deleteMovie(id, jwt)
      .then((res) => {
        if (res) {
          const newArr = savedMovies.filter((item) => item._id !== id);
          setSavedMovies(newArr);
          localStorage.setItem('savedMovies', JSON.stringify(newArr));
        }
      })
      .catch((err) => {
        console.log(err);
        setPopupStatus(false);
        setPopupMsg('Произошла ошибка при удалении фильма.');
        setIsPopupOpen(true);
      });
  }

  const isMovieSaved = (movie) =>
    savedMovies.some((item) => item.movieId === movie.movieId);

  const handleClickMovieBtn = (movie, isSaved) =>
    isSaved ? handleDeleteMovie(movie) : handleSaveMovie(movie);

  function handleLogin(data) {
    mainApi
      .login(data)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          getAllUserData(res.token);
          setLoggedIn(true);
          setPopupStatus(true);
          setPopupMsg('Вы успешно авторизовались!');
          setIsPopupOpen(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setPopupStatus(false);
        setPopupMsg('Произошла ошибка при авторизации.');
        setIsPopupOpen(true);
      });
  }

  function handleRegister(data) {
    mainApi
      .register(data)
      .then((res) => {
        if (res) {
          const { email, password } = data;
          handleLogin({ email, password });
        }
      })
      .catch((err) => {
        console.log(err);
        setPopupStatus(false);
        setPopupMsg('Произошла ошибка при регистрации.');
        setIsPopupOpen(true);
      });
  }

  function handleUpdateUser(data) {
    const jwt = localStorage.getItem('jwt');

    mainApi
      .setUserInfo(data, jwt)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setPopupStatus(true);
          setPopupMsg('Информация обновлена!');
          setIsPopupOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setPopupStatus(false);
        setPopupMsg('Произошла ошибка при обновлении данных.');
        setIsPopupOpen(true);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    setLoggedIn(false);
    history.push('/');
  }

  function handleDisplayMore() {
    const addCount =
      width > 800
        ? DESKTOP_ADD_COUNT
        : width > 505
        ? TABLET_ADD_COUNT
        : MOBILE_ADD_COUNT;
    setDisplayedMoviesCount(displayedMoviesCount + addCount);
  }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res.email) {
            getAllUserData(jwt);
            setLoggedIn(true);
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
          history.push('/');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredSavedMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__content">
          <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
            <Header isLoggedIn={isLoggedIn} />
          </Route>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute
              path="/movies"
              component={Movies}
              isLoggedIn={isLoggedIn}
              movies={filteredMovies.filter(filterDuration)}
              isSaved={isMovieSaved}
              onBtnClick={handleClickMovieBtn}
              onSearch={handleSearchMovies}
              handleFilter={handleFilter}
              filter={filter}
              isLoading={isLoading}
              count={displayedMoviesCount}
              handleDisplayMore={handleDisplayMore}
              isInitialMsg={isInitialMsg}
            />
            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              isLoggedIn={isLoggedIn}
              movies={filteredSavedMovies.filter(filterDuration)}
              isSaved={isMovieSaved}
              onBtnClick={handleClickMovieBtn}
              onSearch={handleSearchSavedMovies}
              handleFilter={handleFilter}
              filter={filter}
              isLoading={isLoading}
            />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              isLoggedIn={isLoggedIn}
              onSubmit={handleUpdateUser}
              onSignOut={handleSignOut}
            />
            <Route path="/signin">
              <Login onSubmit={handleLogin} />
            </Route>
            <Route path="/signup">
              <Register onSubmit={handleRegister} />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Route exact path={['/', '/movies', '/saved-movies']}>
            <Footer />
          </Route>
          <Popup
            isOpen={isPopupOpen}
            status={popupStatus}
            message={popupMsg}
            onClose={closePopup}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
