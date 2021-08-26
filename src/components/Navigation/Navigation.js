import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ isLoggedIn }) {
  const linkClassName =
    'navigation__link ' +
    (isLoggedIn ? 'navigation__link_auth' : 'navigation__link_noauth');

  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <>
          <NavLink
            to="/movies"
            className={linkClassName}
            activeClassName="navigation__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={linkClassName}
            activeClassName="navigation__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </>
      ) : (
        <>
          <Link to="/signup" className={linkClassName}>
            Регистрация
          </Link>
          <Link
            to="/signin"
            className={linkClassName + ' navigation__link_signin'}
          >
            Войти
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
