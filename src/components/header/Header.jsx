import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import { scrollToSection } from '../../utils/smoothScroll';

const Header = () => {
  return (
    <header>
      <div id='header' className="container header__container">
        <div className="header__content">
          <span className="header__greeting">👋 Hola, mi nombre es</span>
          <h1 className="header__name">Christopher</h1>
          <h2 className="header__title">Ingeniero de Sistemas de la Información</h2>
          <p className="header__description">
            Full Stack Developer con experiencia en desarrollo de sistemas empresariales
            y aplicaciones web, con enfoque en backend y arquitecturas escalables.
          </p>
          <CTA />
        </div>
        <HeaderSocial />
        <a href="#footer" className='scroll__down' onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>Ir abajo</a>
      </div>
    </header>
  )
}

export default Header