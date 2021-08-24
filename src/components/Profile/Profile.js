import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__greeting">Привет, Кирилл!</h2>
        <form className="profile__form">
          <div className="profile__form-container">
            <label className="profile__label">
              Пользователь
              <input
                className="profile__input"
                defaultValue="Кирилл"
                type="text"
                placeholder="Имя"
              />
            </label>
            <label className="profile__label">
              E-mail
              <input
                className="profile__input"
                defaultValue="example@gmail.com"
                type="email"
                placeholder="Адрес"
              />
            </label>
          </div>
          <button type="submit" className="profile__button">
            Редактировать
          </button>
        </form>
        <button type="button" className="profile__button profile__button_red">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
