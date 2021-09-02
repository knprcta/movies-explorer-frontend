import React from 'react';
import './DeleteBtn.css';

function DeleteBtn({ onClick }) {
  return <button className="delete-btn" type="button" onClick={onClick} />;
}

export default DeleteBtn;
