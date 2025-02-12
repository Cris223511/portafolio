import React, { useState } from 'react';
import './portfolio.css';

import IMG1 from '../../assets/proyect-1.jpg';
import IMG2 from '../../assets/proyect-2.jpg';
import IMG3 from '../../assets/proyect-3.jpg';
import IMG4 from '../../assets/proyect-4.jpg';
import IMG5 from '../../assets/proyect-5.jpg';
import IMG6 from '../../assets/proyect-6.jpg';
import IMG7 from '../../assets/proyect-7.jpg';
import IMG8 from '../../assets/proyect-8.jpg';
import IMG9 from '../../assets/proyect-9.jpg';
import IMG10 from '../../assets/proyect-10.jpg';
import IMG11 from '../../assets/proyect-11.jpg';
import IMG12 from '../../assets/proyect-12.jpg';
import IMG13 from '../../assets/proyect-13.jpg';
import IMG14 from '../../assets/proyect-14.jpg';
import IMG15 from '../../assets/proyect-15.jpg';
import IMG16 from '../../assets/proyect-16.jpg';
import IMG17 from '../../assets/proyect-17.jpg';
import IMG18 from '../../assets/proyect-18.jpg';
import IMG19 from '../../assets/proyect-19.jpg';
import IMG20 from '../../assets/proyect-20.jpg';

const projects = [
  { id: 1, title: 'Probisa - Gestión de Productos Bituminosos', image: IMG1 },
  { id: 2, title: 'Wingss - Corredora Boutique Inmobiliaria', image: IMG2 },
  { id: 3, title: 'Revive - Agencia de Marketing Digital', image: IMG3 },
  { id: 4, title: 'Servizi Solari SRLS - Paneles Solares en Italia', image: IMG4 },
  { id: 5, title: 'Code Resolutions - Plataforma Educativa en Programación', image: IMG5 },
  { id: 6, title: 'Análisis Estructural con Python y Matplotlib', image: IMG6 },
  { id: 7, title: 'Voz Animal Perú - Adopción de Mascotas', image: IMG7 },
  { id: 8, title: 'Proyectos con Arduino - Gato Robótico y Sensores', image: IMG8 },
  { id: 9, title: 'Salvando Patitas - Plataforma de Adopción en C#', image: IMG9 },
  { id: 10, title: 'ChildMinder Alert - Sistema de Monitoreo para Niños con TDAH', image: IMG10 },
  { id: 11, title: 'CargaPlus - Gestión de Archivos en Linux y PHP', image: IMG11 },
  { id: 12, title: 'Tours Perú - Plataforma de Turismo y Reservas', image: IMG12 },
  { id: 13, title: 'Amaritia Vitality - Crema de Aguaje para Cuidado de la Piel', image: IMG13 },
  { id: 14, title: 'JobConnect - Plataforma para Búsqueda de Empleo', image: IMG14 },
  { id: 15, title: 'Sistemas de Ventas e Inventario - Soluciones Empresariales', image: IMG15 },
  { id: 16, title: 'San Andrés SAC - Tienda de Productos para Construcción', image: IMG16 },
  { id: 17, title: 'Sistema de Pagos Integrado con BCP', image: IMG17 },
  { id: 18, title: 'Almacenes SAC - Control de Inventarios y Logística', image: IMG18 },
  { id: 19, title: 'Municipalidad Provincial de Tumbes - Plataforma Informativa', image: IMG19 },
  { id: 20, title: 'Boticas San Rafael - Gestión de Farmacias y Ventas', image: IMG20 }
];

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const showMoreProjects = () => setVisibleProjects(prev => prev + 6);
  const showLessProjects = () => setVisibleProjects(6);

  return (
    <section id='portfolio'>
      <h5 style={{ paddingTop: '30px' }}>¿Cuáles son mis proyectos?</h5>
      <h5>Próximamente se irá actualizando esta sección</h5>
      <h2>Mis Proyectos</h2>

      <div className='container portfolio__container'>
        {projects.slice(0, visibleProjects).map((project) => (
          <article className='portfolio__item' key={project.id}>
            <div className='portfolio__item-image'>
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a href="/#" className='btn'>Ver más</a>
            </div>
          </article>
        ))}
      </div>

      <div className='ver__mas'>
        {visibleProjects < projects.length ? (
          <button className='btn btn-primary' onClick={showMoreProjects}>Ver Más Proyectos</button>
        ) : (
          <button className='btn btn-primary' onClick={showLessProjects}>Ver Menos</button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
