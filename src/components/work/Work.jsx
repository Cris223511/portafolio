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
                    <h3>Mi Experiencia</h3>
                    <p className={`work__text ${expanded ? 'expanded' : ''}`}>
                        Trabajé como Analista Programador en Lidera Software S.A.C. desde el 9 de mayo de 2022 hasta el 15 de agosto de 2023,
                        en un entorno presencial en San Borja. Me dediqué al desarrollo y mejora de funcionalidades dentro de un sistema contable
                        empresarial, implementando nuevas características y optimizando módulos existentes. Recibíamos las especificaciones y requerimientos
                        a través de documentos detallados en Word, que incluían instrucciones, consultas SQL, modelos de datos y lineamientos de diseño
                        para la creación de nuevos módulos, tanto en el frontend como en el backend.

                        <br /><br />

                        En el frontend, trabajé con Angular 14 y TypeScript, utilizando componentes modulares y servicios para la integración con el backend.
                        Implementábamos la lógica de negocio en los <strong>services</strong> de Angular, desde donde realizábamos peticiones HTTP a la API REST
                        desarrollada en Spring Boot. Utilizamos <strong>HttpClient</strong> para enviar y recibir datos en formato JSON, manejando respuestas y errores
                        con <strong>Observables</strong> y <strong>RxJS</strong> para una mejor gestión asincrónica.

                        <br /><br />

                        En el backend, desarrollamos APIs con <strong>Spring Boot</strong>, estructurando el código en capas: <strong>Controller</strong>, <strong>Service</strong>, <strong>
                        Repository</strong> y <strong>Model</strong>. Los controladores gestionaban las solicitudes HTTP provenientes del frontend, enviando los datos
                        a la capa de servicio, donde se aplicaba la lógica de negocio. Desde allí, se interactuaba con la base de datos a través de <strong>Spring Data JPA</strong> y
                        repositorios, permitiendo operaciones CRUD optimizadas sobre <strong>MySQL Workbench</strong>.

                        <br /><br />

                        En cada nueva funcionalidad, diseñábamos la estructura de los modelos en base a los requerimientos del documento Word,
                        generábamos las entidades en JPA, definíamos los repositorios con consultas personalizadas y creábamos controladores REST para
                        exponer los endpoints. En el frontend, consumíamos estos servicios a través de peticiones GET, POST, PUT y DELETE, manejando
                        los datos dinámicamente en la interfaz.

                        <br /><br />

                        Mi trabajo se enfocó en la eficiencia del código, la implementación de buenas prácticas y la mejora continua del software,
                        asegurando un desarrollo estructurado y funcional para cada módulo del sistema contable.
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
