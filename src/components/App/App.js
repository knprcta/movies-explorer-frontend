import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  const isNoHeader =
    location.pathname === '/signin' ||
    location.pathname === '/signup' ||
    location.pathname === '/error';

  const isNoFooter = isNoHeader || location.pathname === '/profile';

  return (
    <div className="app">
      <div className="app__content">
        {isNoHeader ? null : <Header isLoggedIn={isLoggedIn} />}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <Movies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
        </Switch>
        {isNoFooter ? null : <Footer />}
      </div>
    </div>
  );
}

export default App;
