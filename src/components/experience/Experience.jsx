import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>¿Qué habilidades tengo?</h5>
      <h2>Mis Habilidades</h2>

      {/*======== FRONT END ========*/}
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrontEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>JavScript</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>SASS</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Materialize</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>JQuery</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>AJAX</h4>
              <small className='text-light'>Intermedio</small>
            </article>
          </div>
        </div>
        {/*======== BACK END ========*/}
        <div className='experience__backend'>
        <h3>BackEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>PHP</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Laravel</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>JavaWeb</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>SpringBoot</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>ApiRest</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Servlet</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>C++</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>C / C#</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Python</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>AWS</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>NodeJS</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>ReactJS</h4>
              <small className='text-light'>Básico</small>
            </article>
          </div>
        </div>

        {/*======== BASES DE DATOS ========*/}
        <div className='experience__backend'>
        <h3>DataBases Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>MySQL</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>SQLServer</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>HeidiSQL</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>H2 Console</h4>
              <small className='text-light'>Intermedio</small>
            </article>
          </div>
        </div>

        {/*======== HERRAMIENTAS DE DESARROLLO ========*/}
        <div className='experience__backend'>
        <h3>Herramientas de desarrollos</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Visual Studio Code</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Intellij Idea</h4>
              <small className='text-light'>Avanzado</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Eclipse</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>NetBeans</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>GitHub / Git</h4>
              <small className='text-light'>Intermedio</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Postman</h4>
              <small className='text-light'>Intermedio</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience