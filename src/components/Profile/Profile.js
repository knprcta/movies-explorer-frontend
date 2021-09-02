import React, { useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../utils/validator';
import './Profile.css';

function Profile({ onSubmit, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const validate = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(validate.values);
  };

  useEffect(() => {
    validate.setValues(currentUser);
    validate.setIsValid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__greeting">Привет, {currentUser.name}</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__form-container">
            <label className="profile__label" htmlFor="name">
              Пользователь
              <input
                className="profile__input"
                name="name"
                type="text"
                placeholder="Имя"
                value={validate.values.name || ''}
                onChange={validate.handleChange}
                required
                minLength="2"
                maxLength="30"
                autoComplete="off"
              />
              <span className="profile__error">{validate.errors.name}</span>
            </label>
            <label className="profile__label" htmlFor="email">
              E-mail
              <input
                className="profile__input"
                name="email"
                type="email"
                placeholder="Адрес"
                value={validate.values.email || ''}
                onChange={validate.handleChange}
                required
                autoComplete="off"
              />
              <span className="profile__error">{validate.errors.email}</span>
            </label>
          </div>
          <button
            type="submit"
            className="profile__button"
            disabled={!validate.isValid}
          >
            Редактировать
          </button>
        </form>
        <button
          type="button"
          className="profile__button profile__button_red"
          onClick={onSignOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
