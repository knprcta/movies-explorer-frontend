import React from 'react';
import './AboutMe.css';
import me from '../../images/me.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <div className="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__info-wrapper">
        <div className="about-me__info">
          <div className="about-me__text">
            <p className="about-me__name">Кирилл</p>
            <p className="about-me__description">
              Студент Яндекс.Практикум, 25 лет
            </p>
            <p className="about-me__biography">
              Я родился и живу в Москве. Люблю слушать музыку, коллекционирую
              виниловые пластинки, а ещё увлекаюсь велоспортом. Недавно начал
              кодить. Работаю на должности системного администратора. После
              того, как закончу курс по веб-разработке, планирую сменить работу
              или начать заниматься фриланс-заказами.
            </p>
          </div>
          <ul className="about-me__list">
            <li className="about-me__item">
              <a
                href="https://www.facebook.com/kfedotoff/"
                className="about-me__link"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="about-me__item">
              <a
                href="https://github.com/knprcta"
                className="about-me__link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={me} alt="Моё фото" />
      </div>
      <Portfolio />
    </div>
  );
}

export default AboutMe;
