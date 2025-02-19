import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 style={{ paddingTop: '30px' }}>¿Qué habilidades tengo?</h5>
      <h2>Mis Habilidades</h2>

      {/*======== FRONT END ========*/}
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrontEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>TypeScript</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>ReactJS</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>VueJS</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Angular</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Bootstrap</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Tailwind</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>SASS</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>JQuery</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>AJAX</h4>
            </article>
          </div>
        </div>

        {/*======== BACK END ========*/}
        <div className='experience__backend'>
          <h3>BackEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>NodeJS</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>SpringBoot</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>PHP</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Laravel</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>JavaWeb</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>API rest</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Servlet</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Python</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>C++</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>C</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>C#</h4>
            </article>
          </div>
        </div>

        {/*======== BASES DE DATOS ========*/}
        <div className='experience__backend'>
          <h3>DataBases Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>MySQL</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>SQLServer</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>PostgreSQL</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Oracle DB</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Maria DB</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>HeidiSQL</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Amazon RDS</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Dynamo DB</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Firebase</h4>
            </article>
          </div>
        </div>

        {/*======== HERRAMIENTAS DE DESARROLLO ========*/}
        <div className='experience__backend'>
          <h3>Development Tools</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>VS Code</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Netbeans</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Intellij Idea</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Visual Studio</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Eclipse</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>GitHub / Git</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Postman</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Maven</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>JMeter</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>SonarQube</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience