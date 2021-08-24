import React from 'react';
import './Auth.css';
import LogoLink from '../LogoLink/LogoLink';
import { Link } from 'react-router-dom';

function Auth({ greeting, button, link, linkText, linkPath, isOnSignUp }) {
  return (
    <div className="auth">
      <div className="auth__header">
        <LogoLink />
        <h2 className="auth__greeting">{greeting}</h2>
      </div>
      <form className="auth__form">
        <div className="auth__form-container">
          {isOnSignUp ? (
            <label className="auth__label">
              Имя
              <input
                className="auth__input"
                type="text"
                required
                placeholder="Ваше имя"
              />
            </label>
          ) : null}
          <label className="auth__label">
            E-mail
            <input
              className="auth__input"
              type="email"
              required
              placeholder="Адрес"
            />
          </label>
          <label className="auth__label">
            Пароль
            <input
              className="auth__input"
              type="password"
              required
              placeholder="Ваш пароль"
            />
          </label>
        </div>
        <div className="auth__button" type="submit">
          {button}
        </div>
      </form>
      <div className="auth__link-wrapper">
        <p className="auth__link-text">{linkText}</p>
        <Link to={linkPath} className="auth__link">
          {link}
        </Link>
      </div>
    </div>
  );
}

export default Auth;
