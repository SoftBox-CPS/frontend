import React, { FC } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import styles from "./login-page.module.scss";

const LoginPage: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход</h2>
      <form name="login" className={styles.form}>
        <label>Логин</label>
        <input id="login" type="text" name="login" placeholder="Логин" />
        <label>Пароль</label>
        <input id="password" type="text" name="password" placeholder="Пароль" />
        <button type="button" className={styles.button}>Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
