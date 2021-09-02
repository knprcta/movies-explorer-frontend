import React from 'react';
import Auth from '../Auth/Auth';

function Login({ onSubmit }) {
  return (
    <section className="login">
      <Auth
        isOnSignUp={false}
        greeting={'Рады видеть!'}
        button={'Войти'}
        link={'Регистрация'}
        linkText={'Ещё не зарегистрированы?'}
        linkPath={'/signup'}
        onSubmit={onSubmit}
      />
    </section>
  );
}

export default Login;
