import React from 'react'
import './education.css'
import EDC1 from '../../assets/educacion1.jpeg'
import EDC2 from '../../assets/educacion2.jpeg'
import EDC3 from '../../assets/educacion3.jpeg'
import EDC4 from '../../assets/educacion4.jpeg'
import EDC5 from '../../assets/educacion5.jpeg'
import {ImTrophy} from 'react-icons/im'
import {BiBookBookmark} from 'react-icons/bi'
import {FaCalendarAlt} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'

const Education = () => {
  return (
    <section id='education'>
      <h5>Todo sobre</h5>
      <h2>Mis educaciones</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Colegio Redentorista San Alfonso</h3>
            <div className='education-image'>
              <img src={EDC1} alt="IMG1" />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon'/>
              <p>05/03/12 - 19/12/17</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon'/>
              <p>Av. Jose Quiñones 15487, Sta. Clara - Ate</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon'/>
              <p>Secundaria completa.</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon'/>
              <p>Certificación de culminar mis estudios.</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon'/>
              <p>Certificación de la ISAT y CIBERTEC.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Instituto San Ignacio de Loyola</h3>
            <div className='education-image'>
              <img src={EDC2} alt="IMG1" />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon'/>
              <p>20/03/18 - 19/07/21</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon'/>
              <p>Av. la Fontana 955, La Molina</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon'/>
              <p>Av. Faustino Sánchez Carrión 285, San Isidro</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon'/>
              <p>Av. Alfredo Benavides 778, Cercado de Lima</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon'/>
              <p>Carrera Ingeniería de sistemas de la información.</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon'/>
              <p>Certificación de egresado técnico.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Instituto CEPEBAN</h3>
            <div className='education-image'>
              <img src={EDC3} alt="IMG1" />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon'/>
              <p>24/01/20 - 26/09/20</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon'/>
              <p>Av. Arequipa N° 2661, Lince</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon'/>
              <p>Promotor de servicios financieros y comerciales.</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon'/>
              <p>Certificación por culminar estudios.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Universidad virtual Next U</h3>
            <div className='education-image'>
              <img src={EDC4} alt="IMG1" />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon'/>
              <p>14/10/21 - 01/03/22</p>
            </li>
            <li>
              <FaLaptopCode className='service__list-icon'/>
              <p>Modalidad: remoto</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon'/>
              <p>Carrera de desarrollo web.</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon'/>
              <p>Total de 7 certificaciones por completar los módulos.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Universidad San Ignacio de Loyola</h3>
            <div className='education-image'>
              <img src={EDC5} alt="IMG1" />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon'/>
              <p>16/08/21 - progreso</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon'/>
              <p>Av. La Fontana 550, La Molina.</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon'/>
              <p>Carrera Ingeniería de sistemas de la información.</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon'/>
              <p>Certificación por participar en seminarios y congresos tecnológicos.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education