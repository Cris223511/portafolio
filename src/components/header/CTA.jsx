import React from 'react'
import CV from '../../assets/Christopher_Antonio_Pillihuamán_Santiago_CV.pdf'
import { scrollToSection } from '../../utils/smoothScroll';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download="Christopher_Antonio_Pillihuamán_Santiago_CV.pdf" className='btn'>Descargar CV</a>
      <a href="#contact" className='btn btn-primary' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contáctame</a>
    </div>
  )
}

export default CTA