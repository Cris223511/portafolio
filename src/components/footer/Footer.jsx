import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BiCode} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Christopher PS</a>

      <ul className='permalinks'>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#education">Educación</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/cris223511" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/cris223511" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/cris223511" target="_blank"><BsTwitter/></a>
        <a href="https://www.instagram.com/cris223511" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/cris223511" target="_blank"><BsFacebook/></a>
        <a href="https://www.youtube.com/channel/UC9CdEoE4egh0uHrHMn7J5lA" target="_blank"><BsYoutube/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022. Hecho por Christopher PS, todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer