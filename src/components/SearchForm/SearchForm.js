import React, { useState } from 'react';
import './SearchForm.css';
import SearchBtn from '../SearchButton/SearchBtn';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, filter, handleFilter }) {
  const [keyword, setKeyword] = useState('');

  function handleSearch(e) {
    setKeyword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          onChange={handleSearch}
        />
        <SearchBtn />
      </div>
      <div className="search__checkbox-wrapper">
        <FilterCheckbox filter={filter} handleFilter={handleFilter} />
        <p className="search__checkbox-text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
