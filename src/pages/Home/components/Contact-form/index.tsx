import React, { FC, useEffect } from 'react';
import styles from './Contact-form.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div data-aos="fade-up" className={styles.container}>
        <h2 className={styles.title}>Оставьте заявку</h2>
        <p className={styles.text}>И мы с Вами свяжемся!</p>

        <input className={styles.input} type="text" placeholder="Компания" />
        <input className={styles.input} type="text" placeholder="Email" />
      </div>
    </div>
  );
};

export default ContactForm;
