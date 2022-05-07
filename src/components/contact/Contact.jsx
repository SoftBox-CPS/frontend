import React from 'react'
import '../contact/Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
<h2 className='contact__title'>Оставьте заявку</h2>
<p className='contact__text'>И мы с Вами свяжемся!</p>
<input className='contact__input' type="text" placeholder='Компания' />
<span className='contact__input_border'></span>
<input className='contact__input' type="text" placeholder='Email'/>
<span className='contact__input_border'></span>
    </div>
  )
}
