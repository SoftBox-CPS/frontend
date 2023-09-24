import React, { FC, useState } from "react";
import styles from "./Login.module.scss";

import { post, login, LoginErrorPayload } from "api-client/account";
import { login as instanceLogin } from "api-client/account-instance";
import { basePost } from "api-client";

import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
  const [formValues, setFormValues] = useState({
    login: '',
    password: ''
  });

  const [errors, setErrors] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setErrors([]);
    const { value, name } = e.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const navigate = useNavigate();

  const processError = (error: AxiosError<LoginErrorPayload>) => setErrors(Object.entries(error?.response?.data ?? []).map(el => el[1]));

  // 1 — base axios instance
  // const handleSubmit = () => {
  //   setIsLoading(true);
  //   basePost("/Account/Login", formValues)
  //     .then(response => console.log(response as AxiosResponse))
  //     .catch(error => processError(error as AxiosError))
  //     .finally(() => setIsLoading(false));
  // }

  // 2 — extended url in methods of base axios instance
  // I'd use this.
  // const handleSubmit = () => {
  //   setIsLoading(true);
  //   post("Login", formValues)
  //     .then(response => console.log(response as AxiosResponse))
  //     .catch(error => processError(error as AxiosError))
  //     .finally(() => setIsLoading(false));
  // }

  // 3 — static url in named methods that extend base axios instance.
  // const handleSubmit = () => {
  //   setIsLoading(true);
  //   login(formValues)
  //     .then(response => console.log(response as AxiosResponse))
  //     .catch(error => processError(error as AxiosError))
  //     .finally(() => setIsLoading(false));
  // }

  // 4 — named axios instance
  const handleSubmit = () => {
    setIsLoading(true);
    instanceLogin(formValues)
      .then(response => {
        console.log(response as AxiosResponse);
        navigate('/Rooms');
      })
      /**
       * `error as AxiosError` doesn't inherit LoginErrorPayload type
       * that is passed for `then(response...`
       * .catch(error => processError(error as AxiosError))
       */
      .catch(error => processError(error as AxiosError<LoginErrorPayload>))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход</h2>

      <form name="login" className={styles.form}>
        <label>Логин</label>
        <input id="login" type="text" name="login" onChange={onChange} placeholder="Логин" />

        <label>Пароль</label>
        <input id="password" type="text" name="password" onChange={onChange} placeholder="Пароль" />

        <button type="button" className={styles.button} onClick={handleSubmit} disabled={isLoading}>
          Войти
        </button>
      </form>

      {
        errors.length === 0 ? null 
        : <ul>
          { errors.map((err, idx) => <li key={idx}>{ err }</li>) }
        </ul>
      }
    </div>
  );
};

export default LoginPage;
