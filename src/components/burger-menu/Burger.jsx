import React from 'react';
import '../burger-menu/Burger.css';

export default function Burger({ items, active, setActive }) {
    return (
        <div className={active ? 'burger-menu active' : 'burger-menu'} onClick={() => setActive(false)}>
            <div className="blur" />
            <div className="burger-menu__content" onClick={e => e.stopPropagation()}>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
