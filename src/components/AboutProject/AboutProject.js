import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <div className="about-project">
      <SectionTitle title="О проекте" />
      <ul className="about-project__table">
        <li className="about-project__cell">
          <p className="about-project__heading">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__cell">
          <p className="about-project__heading">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__line">
        <p className="about-project__week">1 неделя</p>
        <p className="about-project__week">4 недели</p>
        <p className="about-project__description">Back-end</p>
        <p className="about-project__description">Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
