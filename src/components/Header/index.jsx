import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'assets/images/icon.svg';

import styles from './Header.module.scss';
import Button from "@mui/material/Button";

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
    ];
  }

  render() {


    return (
      <header>

        <NavLink to={'/'} className={styles.logo}>
          <img src={Icon} alt="Softbox" />
          <h1>Softbox</h1>
        </NavLink>

        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {this.navLinks.map(({ title, to }, i) => (
              <li key={i}>
                <NavLink className={styles.nav_link} to={to}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          {
            this.props.info.userLogin != "" ?
                <div
                    // id="welcome"
                    style={{
                      marginRight: '20px',
                      marginLeft: '40px',
                      display: this.props.info.showContent ? 'block' : 'none' }}
                >
                  <h1 style={{color:'whitesmoke'}}>

                    👋 {this.props.info.userLogin}
                  </h1>
                  <p>
                    <Button variant="outlined" onClick={this.props.handleLogout}>Выйти</Button>
                  </p>
                </div>
                :
                  <div className={styles.nav_login}>
                    <NavLink className={styles.nav_link} to='login'>Login</NavLink>

                    <svg className={styles.login_divider} width="7" height="36" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.00852 0.295454L1.78977 15.9688H0.409091L4.62784 0.295454H6.00852Z" fill="white"/>
                    </svg>

                    <NavLink className={styles.nav_link} to='registration'>Registration</NavLink>
                  </div>

          }
        </nav>
      </header>
    );
  }
}
