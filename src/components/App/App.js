import React from "react";
import { Route, Switch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login'
import Register from '../Register/Register';
import Error from "../Error/Error";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className='app'>
      <div className='app__content'>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Main />
              </Route>
              <Route path='/movies'>
                <Movies />
              </Route>
              <Route path='/saved-movies'>
                <SavedMovies />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/signin'>
                <Login />
              </Route>
              <Route path='/signup'>
                <Register />
              </Route>
              <Route path='/error'>
                <Error />
              </Route>
            </Switch>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
