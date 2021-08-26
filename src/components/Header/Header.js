import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import LogoLink from '../LogoLink/LogoLink';
import ProfileBtn from '../ProfileBtn/ProfileBtn';
import MenuBtn from '../MenuBtn/MenuBtn';
import Menu from '../Menu/Menu';

function Header({ isLoggedIn }) {
  const location = useLocation();
  const isMain = location.pathname === '/';
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 800;

  const headerClassName = 'header ' + (isMain ? 'header_pink' : 'header_white');

  const wrapperClassName =
    'header__nav-wrapper ' +
    (isLoggedIn ? 'header__nav-wrapper_auth' : 'header__nav-wrapper_noauth');

  return (
    <header className={headerClassName}>
      <div className="header__container">
        <LogoLink />
        {isLoggedIn ? (
          isMobile ? (
            <>
              <MenuBtn onClick={handleClick} />
              <Menu isOpen={isOpen} onClick={handleClick} />
            </>
          ) : (
            <div className={wrapperClassName}>
              <Navigation isLoggedIn={isLoggedIn} />
              <ProfileBtn />
            </div>
          )
        ) : (
          <div className={wrapperClassName}>
            <Navigation isLoggedIn={isLoggedIn} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
