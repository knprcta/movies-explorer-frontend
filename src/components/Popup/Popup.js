import React from 'react';
import './Popup.css';
import success from '../../images/success.svg';
import fail from '../../images/fail.svg';

function Popup({ isOpen, status, message, onClose }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img
          className="popup__image"
          src={status ? success : fail}
          alt={status ? 'Успешно' : 'Ошибка'}
        />
        <p className="popup__text">{message}</p>
        <button
          className="popup__close-button"
          type="reset"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default Popup;
