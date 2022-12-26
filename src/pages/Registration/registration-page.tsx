import React from "react";
import styles from "./registration-page.module.scss";

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Регистрация</h2>
      <form name="registration" className={styles.form}>
        <input id="name" type="text" name="name" placeholder="Имя" />
        <input id="surname" type="text" name="surname" placeholder="Фамилия" />
        <input id="email" type="text" name="name" placeholder="Email" />
        <input id="login" type="text" name="name" placeholder="Логин" />
        <input id="password" type="text" name="name" placeholder="Пароль" />
        <input
          id="approve-password"
          type="text"
          name="approve-password"
          placeholder="Подтвердите пароль"
        />
        <button type="button" className={styles.button}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
