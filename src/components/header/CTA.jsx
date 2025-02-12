import React from 'react'
import CV from '../../assets/CV_Christopher_Antonio_Pillihuaman_ES.pdf'
import { scrollToSection } from '../../utils/smoothScroll';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download="Christopher_Antonio_Pillihuaman.pdf" className='btn'>Descargar CV</a>
      <a href="#contact" className='btn btn-primary' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contáctame</a>
    </div>
  )
}

export default CTA