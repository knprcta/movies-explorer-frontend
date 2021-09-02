import React from 'react';
import Auth from '../Auth/Auth';

function Register({ onSubmit }) {
  return (
    <section className="register">
      <Auth
        isOnSignUp={true}
        greeting={'Добро пожаловать!'}
        button={'Зарегистрироваться'}
        link={'Войти'}
        linkText={'Уже зарегистрированы?'}
        linkPath={'/signin'}
        onSubmit={onSubmit}
      />
    </section>
  );
}

export default Register;
