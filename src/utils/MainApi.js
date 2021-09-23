import { MAINAPI_URL } from './constants';

class MainApi {
  constructor(baseUrl) {
    this._url = baseUrl;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  register(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._checkRes);
  }

  login(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._checkRes);
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }

  setUserInfo(user, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    }).then(this._checkRes);
  }

  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }

  addMovie(movie, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movie),
    }).then(this._checkRes);
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }
}

const mainApi = new MainApi(MAINAPI_URL);

export default mainApi;
