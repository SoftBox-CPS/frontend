import React from 'react';
import '../footer/Footer.css';

export default function Footer() {
    return (
        <div className='footer'>

            <div className='title'>
            <h3 className='title_name'>Softbox</h3>
            </div>

            <div className='sections'>
            <div className='sections__item'>
                <p className='sections__item_title'>Адрес</p>
                <p className='sections__item_text'>г. Москва,<br/> ул. Сельскохозяйственная,<br/>
                    д. 17, к. 5, офис 502</p>
            </div>
            <div className='sections__item'>
                <p className='sections__item_title'>Часы работы:</p>
                <p className='sections__item_text'>ПН–ПТ: 9:30–18:30</p>
                <p className='sections__item_text'>СБ: 10:00–14:00</p>
                <p className='sections__item_text'>ВС: выходной</p>
            </div>
            <div className='sections__item'>
                <p className='sections__item_title'>Контакты</p>
                <p className='sections__item_text'><a href='/whatsapp'>WhatsApp</a></p>
                <p className='sections__item_text'><a href='/telegram'>Telegram</a></p>
                <p className='sections__item_text'><a href='/vkontakte'>Vkontakte</a></p>
            </div>
            </div>          
            <p className='footer__copyright_item'>©2022 Softbox. Все права защищены</p>
        </div>
    )
}
