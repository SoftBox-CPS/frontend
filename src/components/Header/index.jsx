import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'assets/icon.svg';

import styles from './Header.module.scss';

export default class Header extends React.Component {
  constructor() {
    super();

    this.navLinks = [
      {
        title: 'О компании',
        to: 'about',
      },
      {
        title: 'Контакты',
        to: 'contacts',
      },
      {
        title: 'Перейти к площадке',
        to: '',
      },
      {
        title: 'FAQ',
        to: 'info',
      },
      {
        title: 'Login /',
        to: 'login',
      },
      {
        title: 'Registration',
        to: 'registration',
      },
    ];
  }

  render() {
    return (
      <header>
        <NavLink to={'/'} className={styles.logo}>
          <img src={Icon} alt="Softbox" />
          <h1>Softbox</h1>
        </NavLink>

        <nav>
          <ul>
            {this.navLinks.map(({ title, to }, i) => (
              <li key={i}>
                <NavLink className={styles.nav_link} to={to}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
