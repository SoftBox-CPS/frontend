import React from "react";
import styles from "./Menu.module.scss";
import {NavLink} from "react-router-dom";

export default class Menu extends React.Component {
    constructor() {
        super();

        this.navLinks = [
            {
                title: 'Настройки профиля',
                to: 'settings',
            },
            {
                title: 'Сотрудники',
                to: 'staffers',
            },
            {
                title: 'Уведомления',
                to: 'notifications',
            },
            {
                title: 'Реквизиты',
                to: 'requisites',
            },
            {
                title: 'История сделок',
                to: 'history',
            },
            {
                title: 'Витрина',
                to: 'showcase',
            },
            {
                title: 'Информация о магазине',
                to: 'shop_info',
            },
        ];
    }
    render() {
        return (
            <div className={styles.container}>
                {this.navLinks.map(({title, to}) => (
                    <NavLink className={styles.menu_item} to={to}>
                        {title}
                    </NavLink>
                ))}
            </div>
        );
    }
};

