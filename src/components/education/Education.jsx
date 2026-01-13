import React from 'react'
import './education.css'
import EDC1 from '../../assets/educacion1.jpeg'
import EDC2 from '../../assets/educacion2.jpeg'
import EDC5 from '../../assets/educacion5.jpeg'
import { ImTrophy } from 'react-icons/im'
import { BiBookBookmark } from 'react-icons/bi'
import { FaCalendarAlt, FaGraduationCap } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const Education = () => {
  return (
    <section id='education'>
      <h5 style={{ paddingTop: '30px' }}>Mi formación académica</h5>
      <h2>Educación</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Colegio Redentorista San Alfonso</h3>
            <div className='education-image'>
              <img src={EDC1} alt="Colegio San Alfonso" />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon' />
              <p>Marzo 2012 - Diciembre 2017</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon' />
              <p>Santa Clara, Ate - Lima</p>
            </li>
            <li>
              <FaGraduationCap className='service__list-icon' />
              <p>Educación Secundaria Completa</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon' />
              <p>Formación básica en computación e informática</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>Certificado de estudios secundarios</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Instituto San Ignacio de Loyola (ISIL)</h3>
            <div className='education-image'>
              <img src={EDC2} alt="ISIL" />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon' />
              <p>Marzo 2018 - Julio 2021</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon' />
              <p>La Molina, Lima</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon' />
              <p>Técnico en Ingeniería de Sistemas de la Información</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>Título Técnico obtenido en julio 2021</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>Certificación por participación en talleres de tecnología</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Universidad San Ignacio de Loyola (USIL)</h3>
            <div className='education-image'>
              <img src={EDC5} alt="USIL" />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon' />
              <p>Agosto 2021 - Diciembre 2024</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon' />
              <p>La Molina, Lima</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon' />
              <p>Ingeniería de Sistemas de la Información</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>Egresado en diciembre 2024</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>Bachiller obtenido en julio 2025</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>Tesis en desarrollo para título profesional</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education