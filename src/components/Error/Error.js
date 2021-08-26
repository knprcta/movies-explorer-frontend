import React from 'react';
import './Error.css';
import { useHistory } from 'react-router-dom';

function Error() {
  const history = useHistory();
  const handleGoBack = () => history.goBack();

  return (
    <section className="error">
      <div className="error__container">
        <div className="error__position">
          <div className="error__main">
            <h1 className="error__code">404</h1>
            <p className="error__text">Страница не найдена</p>
          </div>
          <button
            className="error__go-back-button"
            type="button"
            onClick={handleGoBack}
          >
            Назад
          </button>
        </div>
      </div>
    </section>
  );
}

export default Error;
