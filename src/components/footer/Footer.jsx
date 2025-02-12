import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { scrollToSection } from '../../utils/smoothScroll';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#home" className='footer__logo' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Christopher PS</a>

      <ul className='permalinks'>
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Inicio</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Acerca de</a></li>
        <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experiencia</a></li>
        <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Educación</a></li>
        <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Proyectos</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/cris223511" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/cris223511" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://twitter.com/cris223511" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        <a href="https://www.instagram.com/cris223511.dev" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://www.facebook.com/cris223511" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
        <a href="https://www.youtube.com/channel/UC9CdEoE4egh0uHrHMn7J5lA" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2025. Hecho por Christopher PS, todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer