import React from 'react';
import './Promo.css';
import promo from '../../images/promo.svg';

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__img" src={promo} alt="Промо изображение" />
    </div>
  );
}

export default Promo;
