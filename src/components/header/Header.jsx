import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div id='header' className="container header__container">
        <h5>Hola, mi nombre es</h5>
        <h1>Christopher Pillihuamán</h1>
        <h5 className="text-light">Ingeniería de Sistemas de la información</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img unselectable='on' src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Ir abajo</a>
      </div>
    </header>
  )
}

export default Header