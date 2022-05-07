import React from 'react';
import '../main/Main.css';
import man from '../image/man.jpg';
import box from '../image/box.jpg';

export default function Main() {
    return (
        <div className='main'>
            <div className='main__about'>
                <h2 className='main__about_title'>Мы меняем привычную дистрибуцию!</h2>
                <p className='main__about_text'>Softbox CPS – это система разработанная компанией Softbox-retailing для поддержки среднего и малого бизнеса. <br /> <br />
                    Наша технология позволяет компаниям сотрудничать и строить свой бизнес эффективнее вне зависимости какая погода за окном. <br /><br />
                    Мы меняем границы продаж и помогаем вам экономить.
                </p>
            </div>
            <h2 className='main_title-advantages'>Почему стоит присоединиться к нам?</h2>
            <div className='advantages-buisnes'>
                <div className='advantages__buisnes'>
                    <h3 className='advantages__buisnes_title'>Бизнесу</h3>
                    <ul>
                        <li className='advantages__buisnes_item'>Экономия средств при покупке расходных материалов</li>
                        <li className='advantages__buisnes_item'>Увеличение прибыли и продаж</li>
                        <li className='advantages__buisnes_item'>Получение дополнительных скидок</li>
                        <li className='advantages__buisnes_item'>Сокращение затрат на логистику</li>
                    </ul>
                    <button className='advantages__buisnes_button'>Связаться</button>
                </div>
                <div>
                <img className='advantages__image' src={man} alt="man" />
                </div>
            </div>
            <div className='advantages-provider'>
                <div className='provider__image'>
                <img src={box} alt="box" />
                </div>
                <div className='advantages__provider'>
                    <h3 className='advantages__provider_title'>Поставщику</h3>
                    <ul>
                        <li className='advantages__provider_item'>Увеличение надежых контрагентов</li>
                        <li className='advantages__provider_item'>Увеличение оборота сбыта</li>
                        <li className='advantages__provider_item'>Возможность предложить свой продукт крупным компаниям</li>
                    </ul>
                    <button className='advantages__buisnes_button'>Связаться</button>
                </div>

            </div>
        </div>
    )
}
