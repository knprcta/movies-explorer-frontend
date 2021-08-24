import React from 'react';
import './SaveBtn.css';

function SaveBtn({ isSaved, onClick }) {
  return (
    <button
      className={!isSaved ? 'save-btn' : 'save-btn save-btn_active'}
      type="button"
      onClick={onClick}
    />
  );
}

export default SaveBtn;
