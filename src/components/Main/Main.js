import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <main className="main">
      <section className="main__section main__section_pink">
        <div className="main__container">
          <Promo />
        </div>
      </section>
      <section className="main__section main__section_white">
        <div className="main__container">
          <AboutProject />
        </div>
      </section>
      <section className="main__section main__section_grey">
        <div className="main__container">
          <Techs />
        </div>
      </section>
      <section className="main__section main__section_white">
        <div className="main__container">
          <AboutMe />
        </div>
      </section>
    </main>
  );
}

export default Main;
