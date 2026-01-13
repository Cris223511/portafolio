import React, { useState, useEffect } from 'react';
import './work.css';
import WORK from '../../assets/work.jpg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Work = () => {
    const [expanded, setExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 200);
    }, []);

    return (
        <section id='work' className={isVisible ? 'visible' : 'hidden'}>
            <h5 style={{ paddingTop: '30px' }}>Mi trayectoria</h5>
            <h2>Experiencia Laboral</h2>

            <div className='container work__container'>
                <div className='work__content'>
                    <h3>Analista Programador - Lidera Software S.A.C.</h3>
                    <p className='work__period'>Mayo 2022 - Agosto 2023 | San Borja, Lima</p>

                    <p className={`work__text ${expanded ? 'expanded' : ''}`}>
                        Trabajé en el desarrollo de un sistema contable empresarial completo con <strong>Angular 14</strong> y
                        <strong> Spring Boot</strong>. Mi principal logro fue optimizar el rendimiento del sistema en un 40% mediante
                        consultas SQL más eficientes y una arquitectura limpia en capas: Controller, Service, Repository y Model.
                        <br /><br />
                        Me encargué del diseño e implementación de las <strong>APIs REST</strong> que consumían los diferentes módulos
                        del sistema. Utilicé <strong>Spring Data JPA</strong> para gestionar la persistencia de datos en <strong>MySQL</strong>,
                        lo que permitió realizar operaciones CRUD de manera eficiente y escalable. En el frontend, trabajé con
                        <strong> HttpClient</strong>, <strong>Observables</strong> y <strong>RxJS</strong> para manejar las peticiones
                        asincrónicas y el flujo de datos entre componentes.
                        <br /><br />
                        El proceso de desarrollo consistía en recibir especificaciones detalladas en documentos Word que incluían
                        requerimientos funcionales, consultas SQL, modelos de datos y lineamientos de diseño. A partir de esto, creaba
                        las entidades JPA, definía los repositorios con consultas personalizadas y exponía los endpoints REST necesarios.
                        Luego, en Angular consumía estos servicios mediante peticiones GET, POST, PUT y DELETE, integrando los datos
                        dinámicamente en la interfaz de usuario.
                        <br /><br />
                        Formé parte activa del equipo ágil bajo metodología <strong>Scrum</strong>. Participé en el análisis de
                        requerimientos, diseño de modelos de datos, dailies, refinamientos de sprint, reviews y retrospectivas. Esta
                        colaboración constante me permitió alinear el desarrollo técnico con las necesidades del negocio y entregar
                        funcionalidades de valor en cada sprint.
                        <br /><br />
                        Apliqué patrones de diseño como <strong>MVC</strong>, <strong>DAO</strong> y <strong>DTO</strong> para mantener
                        el código organizado y desacoplado. Seguí principios de <strong>Clean Code</strong> y <strong>SOLID</strong> para
                        asegurar que el sistema fuera mantenible y extensible a largo plazo. Cada módulo que desarrollé cumplió
                        con estándares de calidad que facilitaron su integración con el resto del sistema.
                        <br /><br />
                        Gestioné el control de versiones con <strong>Git/GitHub</strong>, trabajando en ramas separadas para cada
                        funcionalidad y realizando merges controlados. Además, elaboré documentación técnica detallada que permitió
                        al equipo comprender la arquitectura, los flujos de datos y la lógica de negocio implementada en cada módulo.
                        <br /><br />
                        <strong>Stack técnico:</strong> Angular 14, TypeScript, Spring Boot, Spring Data JPA, MySQL, HTML5, CSS3,
                        JavaScript, Git/GitHub, Metodologías Ágiles (Scrum), Patrones de diseño MVC/DAO/DTO.
                    </p>

                    <div className="work__toggle" onClick={() => setExpanded(!expanded)}>
                        {expanded ? <FaChevronUp /> : <FaChevronDown />}
                        <span>{expanded ? 'Ver menos' : 'Ver más'}</span>
                    </div>
                </div>

                <div className={`work__me ${expanded ? 'sticky' : ''}`}>
                    <div className='work__me-image'>
                        <img unselectable='on' src={WORK} alt="Work" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;