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
      <h2>Acerca de Mí</h2>
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
              <small>8+ años programando</small>
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
          <br />
          <h3>Mi biografía</h3>
          <p>
            Me llamo Christopher Antonio Pillihuamán Santiago, tengo 24 años y vivo en Lima, en el distrito de La Molina. Desde pequeño, la tecnología me ha llamado la atención, especialmente la forma en que los sistemas transforman ideas en soluciones reales. Al principio, la programación me parecía compleja, pero con el tiempo descubrí que, con paciencia y dedicación, pude entender cómo funciona realmente el desarrollo de software.<br></br><br></br>
            En 2018 comencé mis estudios en ISIL, donde obtuve el título de Técnico en Sistemas en 2021. Luego continué mi formación en la Universidad San Ignacio de Loyola (USIL) y completé la carrera de Ingeniería de Sistemas de la Información en diciembre de 2024. Durante ese tiempo trabajé como Analista Programador en Lidera Software S.A.C. (2022–2023), donde participé en el desarrollo de un sistema contable empresarial.<br></br><br></br>
            En 2023 fundé <a href="https://www.coderesolutions.com" target="_blank" rel="noopener noreferrer">Code Resolutions</a>, mi proyecto freelance de desarrollo de software, donde ofrezco soluciones tecnológicas personalizadas a clientes que buscan llevar sus ideas al mundo digital. Desde entonces, he trabajado en proyectos web, sistemas administrativos y aplicaciones móviles, siempre enfocado en entregar productos de calidad.<br></br><br></br>
            En julio de 2025 obtuve el grado de bachiller en Ingeniería de Sistemas de la Información y actualmente trabajo en mi tesis para obtener el título profesional. Me apasiona el aprendizaje continuo y siempre busco mejorar mis habilidades técnicas.
          </p>
          <h3>Mi Objetivo profesional</h3>
          <p>
            Quiero crecer como profesional en el mundo de la tecnología y aportar soluciones innovadoras en el desarrollo de software. Me interesa trabajar con nuevas tecnologías y seguir aprendiendo cada día.
          </p>

          <a href="#contact" className='btn btn-primary' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contáctame</a>
        </div>
      </div>
    </section>
  )
}

export default About