import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import { scrollToSection } from '../../utils/smoothScroll';

const Header = () => {
  return (
    <header>
      <div id='header' className="container header__container">
        <h5 style={{ paddingTop: '30px' }}>Hola, mi nombre es</h5>
        <h1>Christopher</h1>
        <h5 className="text-light">Ingeniero de Sistemas de la Información</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img unselectable='on' src={ME} alt="me" />
        </div>

        <a href="#footer" className='scroll__down' onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>Ir abajo</a>
      </div>
    </header>
  )
}

export default Header