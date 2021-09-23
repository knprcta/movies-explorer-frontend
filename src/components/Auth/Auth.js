import React from 'react';
import './Auth.css';
import LogoLink from '../LogoLink/LogoLink';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../utils/validator';

function Auth({
  greeting,
  button,
  link,
  linkText,
  linkPath,
  isOnSignUp,
  onSubmit,
}) {
  const validate = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(validate.values);
    validate.resetForm();
  };

  return (
    <div className="auth">
      <div className="auth__header">
        <LogoLink />
        <h2 className="auth__greeting">{greeting}</h2>
      </div>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__form-container">
          {isOnSignUp ? (
            <label className="auth__label" htmlFor="name">
              Имя
              <input
                className="auth__input"
                name="name"
                type="text"
                required
                placeholder="Ваше имя"
                onChange={validate.handleChange}
                value={validate.values.name || ''}
                minLength="2"
                maxLength="30"
                autoComplete="off"
              />
              <span className="auth__error">{validate.errors.name}</span>
            </label>
          ) : null}
          <label className="auth__label" htmlFor="email">
            E-mail
            <input
              className="auth__input"
              name="email"
              type="email"
              required
              placeholder="Адрес"
              onChange={validate.handleChange}
              value={validate.values.email || ''}
              autoComplete="off"
            />
            <span className="auth__error">{validate.errors.email}</span>
          </label>
          <label className="auth__label" htmlFor="password">
            Пароль
            <input
              className="auth__input"
              name="password"
              type="password"
              required
              placeholder="Ваш пароль"
              onChange={validate.handleChange}
              value={validate.values.password || ''}
              minLength="8"
              autoComplete="off"
            />
            <span className="auth__error">{validate.errors.password}</span>
          </label>
        </div>
        <button
          className="auth__button"
          type="submit"
          disabled={!validate.isValid}
        >
          {button}
        </button>
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
