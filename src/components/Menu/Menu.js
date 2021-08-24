import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import ProfileBtn from '../ProfileBtn/ProfileBtn';
import closeMenuBtn from '../../images/close-menu-button.svg';

function Menu({ isOpen, onClick }) {
  return (
    <div className={`menu ${isOpen ? 'menu_opened' : ''}`}>
      <div className="menu__container">
        <button className="menu__close-btn" type="button" onClick={onClick}>
          <img
            className="menu__close-btn-img"
            src={closeMenuBtn}
            alt="Кнопка закрытия меню"
          />
        </button>
        <nav className="menu__nav">
          <NavLink
            onClick={onClick}
            className="menu__link"
            activeClassName="menu__link_active"
            exact
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            onClick={onClick}
            className="menu__link"
            activeClassName="menu__link_active"
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            onClick={onClick}
            className="menu__link"
            activeClassName="menu__link_active"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <ProfileBtn onClick={onClick} />
      </div>
    </div>
  );
}

export default Menu;
