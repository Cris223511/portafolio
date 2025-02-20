import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Configurar estilos personalizados para los Toast
  const toastStyle = {
    background: "#212143",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
  };

  // Enviar correo con EmailJS
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const senderEmail = formData.get("email");

    try {
      await emailjs.sendForm(
        'service_bauta8m', // ID del servicio de EmailJS
        'template_qehixcb', // ID de la plantilla en EmailJS
        form.current,
        'UmJNbx2HMtvY1-TGx' // Public Key de EmailJS
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
