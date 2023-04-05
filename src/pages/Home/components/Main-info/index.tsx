import React, { FC } from 'react';
import styles from './Main-info.module.scss';

import ManImage from 'assets/images/man.jpg';
import BoxImage from 'assets/images/box.jpg';

const MainInfo: FC = () => {
  return (
    <div className={styles.container}>
      <div data-aos="fade-left" className={styles.about}>
        <h2 className={styles.title}>Мы меняем привычную дистрибуцию!</h2>

        <p className={styles.text}>
          Softbox CPS – это система разработанная компанией Softbox-retailing 
          <br />
          для поддержки среднего
          и малого бизнеса. 
          <br /> 
          <br />
          Наша технология позволяет компаниям сотрудничать и строить 
          <br />
          свой бизнес эффективнее вне
          зависимости какая погода за окном.
          <br />
          <br />
          Мы меняем границы продаж и помогаем вам экономить.
        </p>

      </div>

      <h2 data-aos="fade-left" className={styles.advantages}>
        Почему стоит присоединиться к нам?
      </h2>

      <div className={styles.business}>
        <div data-aos="fade-right" className={styles.advantages__business}>
          <h3 className={styles.advantages__business_title}>Бизнесу</h3>

          <ul className={styles.advantages__business_list}>
            <li className={styles.advantages__business_item}>
              Экономия средств при покупке расходных материалов
            </li>
            <li className={styles.advantages__business_item}>Увеличение прибыли и продаж</li>
            <li className={styles.advantages__business_item}>Получение дополнительных скидок</li>
            <li className={styles.advantages__business_item}>Сокращение затрат на логистику</li>
          </ul>

          <button className={styles.advantages__business_button}>Связаться</button>
        </div>

        <div data-aos="fade-left">
          <img className={styles.advantages__image} src={ManImage} alt="man" />
        </div>

      </div>

      <div className={styles.provider}>
        <div data-aos="fade-right" className={styles.provider__image}>
          <img src={BoxImage} alt="box" />
        </div>

        <div data-aos="fade-left" className={styles.advantages__provider}>
          <h3 className={styles.advantages__provider_title}>Поставщику</h3>

          <ul className={styles.advantages__provider_list}>
            <li className={styles.advantages__provider_item}>Увеличение надежых контрагентов</li>
            <li className={styles.advantages__provider_item}>Увеличение оборота сбыта</li>
            <li className={styles.advantages__provider_item}>
              Возможность предложить свой продукт крупным компаниям
            </li>
          </ul>

          <button className={styles.advantages__business_button}>Связаться</button>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
