import { MOVIESAPI_URL } from './constants';

class MoviesApi {
  constructor(baseUrl) {
    this._url = baseUrl;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(this._url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkRes);
  }
}

const moviesApi = new MoviesApi(MOVIESAPI_URL);

export default moviesApi;
