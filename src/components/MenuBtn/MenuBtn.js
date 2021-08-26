import React from 'react';
import './MenuBtn.css';

function MenuBtn({ onClick }) {
  return (
    <button className="menu-btn" type="button" onClick={onClick}>
      <span className="menu-btn__span"></span>
      <span className="menu-btn__span"></span>
      <span className="menu-btn__span"></span>
    </button>
  );
}

export default MenuBtn;
