import React from 'react';
import './SearchForm.css';
import SearchBtn from '../SearchButton/SearchBtn';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="search">
      <div className="search__container">
        <input className="search__input" type="text" placeholder="Фильм" required/>
        <SearchBtn />
      </div>
      <div className="search__checkbox-wrapper">
        <FilterCheckbox />
        <p className="search__checkbox-text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
