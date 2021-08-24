import React from 'react';
import './ProfileBtn.css';
import profile from '../../images/profile.svg';
import { Link } from 'react-router-dom';

function ProfileBtn({ onClick }) {
  return (
    <Link to="/profile" className="profile-btn" onClick={onClick}>
      Аккаунт
      <img className="profile-btn__img" src={profile} alt="Лого профиля" />
    </Link>
  );
}

export default ProfileBtn;
