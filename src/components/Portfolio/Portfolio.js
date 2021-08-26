import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://knprcta.github.io/how-to-learn/index.html"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Статичный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://knprcta.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Адаптивный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/knprcta/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Одностраничное приложение
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
