import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ filter, handleFilter }) {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__switcher"
        type="checkbox"
        onChange={handleFilter}
        checked={filter}
      />
    </div>
  );
}

export default FilterCheckbox;
