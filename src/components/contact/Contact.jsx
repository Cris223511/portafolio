import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const toastStyle = {
    background: "#212143",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const senderEmail = formData.get("email");

    try {
      await emailjs.sendForm(
        'service_bauta8m',
        'template_qehixcb',
        form.current,
        'UmJNbx2HMtvY1-TGx'
      );

      toast.success(`¡Éxito! Mensaje enviado desde ${senderEmail}.`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        style: toastStyle,
      });

      e.target.reset();
    } catch (error) {
      console.error('Error al enviar:', error);
      toast.error('Error al enviar el correo. Inténtalo nuevamente.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        style: toastStyle,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact'>
      <h5 style={{ paddingTop: '30px' }}>Ponte en contacto conmigo</h5>
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
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Christopher Pillihuamán</h5>
            <a href="https://www.linkedin.com/in/cris223511/" target="_blank" rel="noopener noreferrer">Enviar un mensaje</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+51 973 182 294</h5>
            <a href="https://wa.me/51973182294?text=¡Hola!%2C%20mucho%20gusto%20🤝%2C%20me%20llamó%20mucho%20la%20atención%20tu%20portafolio%20web%2C%20quiero%20contactarme%20contigo." target="_blank" rel="noopener noreferrer">Enviar un mensaje</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='¿Cuáles son tus nombres?' required />
          <input type="email" name='email' placeholder='¿Cuál es tu correo electrónico?' required />
          <textarea name='message' rows="7" placeholder='Escribe tu mensaje.' required minLength='20' maxLength='500'></textarea>
          <button type='submit' className='btn btn-primary' disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;