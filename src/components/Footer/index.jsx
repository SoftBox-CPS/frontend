import React from 'react';

import styles from './Footer.module.scss';

export default class Footer extends React.Component {
  constructor() {
    super();

    this.info = [
      {
        title: 'Адрес',
        text: ['г. Москва, ул. Сельскохозяйственная,', 'д. 17, к. 5, офис 502'],
      },
      {
        title: 'Часы работы:',
        text: ['ПН-ПТ: 9:30-18:30', 'СБ: 10:00–14:00', 'ВС: выходной'],
      },
      {
        title: 'Контакты',
        text: ['WhatsApp', 'Telegram'],
      },
    ];
  }

  render() {
    return (
      <footer>
        <h1>Softbox</h1>

        <div className={styles.info}>
          {this.info.map(({ title, text }, index) => (
            <section key={index}>
              <h3>{title}</h3>

              {text.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </section>
          ))}
        </div>

        <p>©2022 Softbox. Все права защищены</p>
      </footer>
    );
  }
}
