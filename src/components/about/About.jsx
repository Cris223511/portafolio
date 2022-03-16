import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiBrain} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Vamos a saber</h5>
      <h2>Acerca de mi</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img unselectable='on' src={ME} alt="About" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
           <article className='about__card'>
             <GiBrain className='about__icon'/>
             <h5>Habilidades</h5>
             <small>4+ años programando</small>
           </article>
           <article className='about__card'>
             <FaAward className='about__icon'/>
             <h5>Diplomas</h5>
             <small>10+ diplomas recibidas</small>
           </article>
           <article className='about__card'>
             <VscFolderLibrary className='about__icon'/>
             <h5>Proyectos</h5>
             <small>15+ proyectos realizados</small>
           </article>
          </div>
          <br/>
          <h3>Mi biografía</h3>
          <p>
            Me llamo Christopher Antonio Pillihuamán Santiago, tengo 20 años, vivo en Lima, en el distrito de La Molina.
            Actualmente estoy estudiando la carrera de ingeniería de sistemas en la Universidad San Ignacio de Loyola (USIL).
            Tengo una inspiración basada en el mundo de la programación y desarrollo web. Formo parte del área de BackEnd y
            FrontEnd con una metodología ágil y efectiva con más de 4 años de práctica, en el que día a día voy aplicando todos
            mis conocimientos en la informática para un mismo objetivo: aprender y descubrir algo nuevo.
          </p>
          <h3>Mi Objetivo profesional</h3>
          <p>
          Tengo como objetivo desempeñarme de manera competente y satisfactoria en todos los niveles de una organización laboral.
          </p>

          <a href="#contact" className='btn btn-primary'>Conctáctame</a>
        </div>
      </div>
    </section>
  )
}

export default About