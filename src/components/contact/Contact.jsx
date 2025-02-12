import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3y7hmil', 'template_ejc4td7', form.current, 'UmJNbx2HMtvY1-TGx')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5 style={{ paddingTop: '30px' }}>Ponte en Contacto Conmigo</h5>
      <h2>Contacto</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>cris_antonio2001@hotmail.com</h5>
            <a href="mailto:cris_antonio2001@hotmail.com" target="_blank" rel="noopener noreferrer">Enviar un mensaje</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Christopher PS</h5>
            <a href="https://m.me/cris223511" target="_blank" rel="noopener noreferrer">Enviar un mensaje</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+51 973 182 294</h5>
            <a href="whatsapp://send?text=¡Hola!, mucho gusto 🤝, me llamó mucho la atención tu portafolio web, quiero contactarme contigo.&phone=+51 973 182 294" target="_blank" rel="noopener noreferrer">Enviar un mensaje</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='¿Cuáles son tus nombres?' required />
          <input type="email" name='email' placeholder='¿Cuál es tu correo electrónico?' required />
          <textarea name='message' rows="7" placeholder='Escribe tu mensaje.' required minLength='20' maxLength='500'></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact