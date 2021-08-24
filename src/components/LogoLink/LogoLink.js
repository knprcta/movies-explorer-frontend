import React from 'react';
import './LogoLink.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function LogoLink() {
  return (
    <Link to="/" className="logo-link">
      <img className="logo-link__image" src={logo} alt="Логотип" />
    </Link>
  );
}

export default LogoLink;
