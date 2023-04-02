import React, { FC } from 'react';
import styles from './Representation-info.module.scss';

const RepresentationInfo: FC = () => {
  return (
    <div className={styles.headerSection}>
      <h1 className={styles.slogan}>Быстро. Экономно. Легко</h1>

      <p className={styles.text}>
        Совместные покупки - это просто и всегда по
        <br />
        доступной цене! Благодаря нашему сервису
        <br />
        можно сократить издержки до 40%.
      </p>
      
      <button className={styles.button}>Связаться</button>
    </div>
  );
};

export default RepresentationInfo;
