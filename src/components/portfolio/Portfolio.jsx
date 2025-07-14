import React, { useState } from 'react';
import './portfolio.css';
import ProjectModal from '../modal/ProjectModal';
import projectsData from '../../data/projectsData';

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const showMoreProjects = () => setVisibleProjects(prev => prev + 6);
  const showLessProjects = () => setVisibleProjects(6);
  const openModal = (project) => { setSelectedProject(null); setTimeout(() => setSelectedProject(project), 50); };
  const closeModal = () => setSelectedProject(null);

  return (
    <section id='portfolio'>
      <h5 style={{ paddingTop: '30px' }}>Presentación de</h5>
      <h2>Mis Proyectos</h2>

      <div className='container portfolio__container'>
        {projectsData.slice(0, visibleProjects).map((project) => (
          <article className='portfolio__item' key={project.id}>
            <div className='portfolio__item-image'>
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <button className='btn' onClick={() => openModal(project)}>Ver más</button>
            </div>
          </article>
        ))}
      </div>

      <div className='ver__mas'>
        {visibleProjects < projectsData.length ? (
          <button className='btn btn-primary' onClick={showMoreProjects}>Ver Más Proyectos</button>
        ) : (
          <button className='btn btn-primary' onClick={showLessProjects}>Ver Menos</button>
        )}
      </div>

      {selectedProject && (<><ProjectModal project={selectedProject} onClose={closeModal} /></>)}
    </section>
  );
};

export default Portfolio;
