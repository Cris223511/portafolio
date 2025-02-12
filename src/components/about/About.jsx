import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { scrollToSection } from '../../utils/smoothScroll';

const About = () => {
  return (
    <section id='about'>
      <h5 style={{ paddingTop: '30px' }}>Vamos a saber</h5>
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
              <GiBrain className='about__icon' />
              <h5>Habilidades</h5>
              <small>7+ años programando</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Diplomas</h5>
              <small>10+ diplomas recibidos</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>20+ proyectos realizados</small>
            </article>
          </div>
          <br />
          <h3>Mi biografía</h3>
          <p>
            Me llamo Christopher Antonio Pillihuamán Santiago, tengo 24 años y vivo en Lima, en el distrito de La Molina.
            Soy Ingeniero de Sistemas de la Información, egresado de la Universidad San Ignacio de Loyola (USIL), donde completé
            todos mis cursos en diciembre de 2024. Actualmente, en 2025, estoy en proceso de obtener mi bachillerato, el cual
            se encuentra en trámite y está previsto para abril o mayo de este año. Paralelamente, estoy desarrollando mi tesis
            para obtener mi título profesional. Desde pequeño me interesó la tecnología, lo que me llevó a estudiar Ingeniería
            de Sistemas en ISIL en 2018, graduándome como Técnico en Sistemas en 2021 y continuando mis estudios en USIL.
            Además, trabajé como Analista de Software en Lidera Software S.A.C. (2022-2023), donde colaboré con el desarrollo
            de un sistema contable para la empresa. Me apasiona la programación, el desarrollo web y la exploración de nuevas tecnologías.
          </p>

          <h3>Mi Objetivo profesional</h3>
          <p>
            Aspiro a desarrollarme como un profesional competente en el mundo de la tecnología, contribuyendo con soluciones innovadoras
            en el área de desarrollo de software y explorando nuevas tecnologías para seguir creciendo en mi carrera.
          </p>

          <a href="#contact" className='btn btn-primary' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contáctame</a>
        </div>
      </div>
    </section>
  )
}

export default About