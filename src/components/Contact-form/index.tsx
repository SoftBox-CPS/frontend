import React, { FC, useEffect } from 'react';
import styles from './Contact-form.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactForm: FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className={styles.container}>
      <h2 className={styles.title}>Оставьте заявку</h2>
      <p className={styles.text}>И мы с Вами свяжемся!</p>
      <input className={styles.input} type="text" placeholder="Компания" />
      <span className={styles.input_border}></span>
      <input className={styles.input} type="text" placeholder="Email" />
      <span className={styles.input_border}></span>
    </div>
  );
};

export default ContactForm;
