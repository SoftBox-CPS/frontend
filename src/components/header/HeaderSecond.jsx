import React, { useState } from 'react';
import '../header/HeaderSecond.css';
import Burger from '../burger-menu/Burger';
import logo from '../image/1 1.png';

export default function Header() {
    const [menuActive,setMenuActive] = useState(false)
    const items = [{value:'О компании', href:'/about'},{value:'Контакты', href:'/contact'},{value:'Перейти к площадке', href:'/goToPlace'},{value:'FAQ', href:'/faq'},]
    return (
        <div className='header'>
            <div className='menu'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <h1 className='logo__name'>Softbox</h1>
            </div>
            <ul className='menu__list'>
                <li className='menu__list_item'>О компании</li>
                <li className='menu__list_item'>Контакты</li>
                <li className='menu__list_item'>Перейти к площадке </li>
                <li className='menu__list_item'>FAQ</li>
            </ul>
            <div className='burger' onClick={() => setMenuActive(!menuActive)}>
                    <span className='burger__item'></span>
                </div>
                <Burger active={menuActive} setActive={setMenuActive} items={items} /> 
            </div>
        </div>
    )
}
