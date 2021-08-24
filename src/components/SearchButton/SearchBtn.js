import React from 'react';
import './SearchBtn.css';
import button from '../../images/search-button.svg';

function SearchBtn() {
  return (
    <button className="search-btn" type="submit">
      <img className="search-btn__img" src={button} alt="Кнопка поиска" />
    </button>
  );
}

export default SearchBtn;
