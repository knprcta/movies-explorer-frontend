import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__copyright">
          <p className="footer__date">©2021</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="https://praktikum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://github.com/yandex-praktikum"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Github
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.facebook.com/yandex.practicum"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
