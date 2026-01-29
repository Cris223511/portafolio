import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './portfolio.css';
import ProjectModal from '../modal/ProjectModal';
import projectsDataES from '../../data/projectsData.es';
import projectsDataEN from '../../data/projectsData.en';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  // Selecciona el JSON según el idioma actual
  const projectsData = i18n.language === 'en' ? projectsDataEN : projectsDataES;

  const showMoreProjects = () => setVisibleProjects(prev => prev + 6);
  const showLessProjects = () => setVisibleProjects(6);
  const openModal = (project) => { setSelectedProject(null); setTimeout(() => setSelectedProject(project), 50); };
  const closeModal = () => setSelectedProject(null);

  return (
    <section id='portfolio'>
      <h5 style={{ paddingTop: '30px' }}>{t('portfolio.subtitle')}</h5>
      <h2>{t('portfolio.title')}</h2>
      <div className='container portfolio__container'>
        {projectsData.slice(0, visibleProjects).map((project) => (
          <article className='portfolio__item' key={project.id}>
            <div className='portfolio__item-image'>
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <button className='btn' onClick={() => openModal(project)}>{t('portfolio.viewMore')}</button>
            </div>
          </article>
        ))}
      </div>
      <div className='ver__mas'>
        {visibleProjects < projectsData.length ? (
          <button className='btn btn-primary' onClick={showMoreProjects}>{t('portfolio.showMore')}</button>
        ) : (
          <button className='btn btn-primary' onClick={showLessProjects}>{t('portfolio.showLess')}</button>
        )}
      </div>
      {selectedProject && (<ProjectModal project={selectedProject} onClose={closeModal} />)}
    </section>
  );
};

export default Portfolio;