import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './portfolio.css';
import ProjectModal from '../modal/ProjectModal';
import projectsDataES from '../../data/projectsData.es';
import projectsDataEN from '../../data/projectsData.en';
import { FaSearch, FaTimes, FaFilter, FaChevronDown, FaCheck, FaSortAmountDown, FaFolder, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [hasDemo, setHasDemo] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [techSearchTerm, setTechSearchTerm] = useState('');

  const techDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);

  const projectsData = i18n.language === 'en' ? projectsDataEN : projectsDataES;

  const allTechnologies = [...new Set(
    projectsData.flatMap(project =>
      Object.values(project.technologies).flat()
    )
  )].sort();

  const toggleTech = (tech) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter(t => t !== tech));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const removeTech = (tech) => {
    setSelectedTechs(selectedTechs.filter(t => t !== tech));
  };

  const filteredProjects = projectsData
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTech = selectedTechs.length === 0 ||
        selectedTechs.some(tech =>
          Object.values(project.technologies).flat().includes(tech)
        );

      const hasProjectDemo = project.description.includes('Demo:') ||
        project.description.includes('demo:') ||
        project.description.toLowerCase().includes('href=');

      const matchesDemo = hasDemo === 'all' ||
        (hasDemo === 'yes' && hasProjectDemo) ||
        (hasDemo === 'no' && !hasProjectDemo);

      return matchesSearch && matchesTech && matchesDemo;
    })
    .sort((a, b) => {
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
      return 0;
    });

  const filteredTechnologies = allTechnologies.filter(tech =>
    tech.toLowerCase().includes(techSearchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (techDropdownRef.current && !techDropdownRef.current.contains(event.target)) {
        setTechDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setSortDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clearSearch = () => setSearchTerm('');
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTechs([]); // Array vacío
    setHasDemo('all');
    setSortBy('recent');
  };

  const showMoreProjects = () => setVisibleProjects(prev => prev + 6);
  const showLessProjects = () => setVisibleProjects(6);
  const openModal = (project) => { setSelectedProject(null); setTimeout(() => setSelectedProject(project), 50); };
  const closeModal = () => setSelectedProject(null);

  const activeFiltersCount = selectedTechs.length + (hasDemo !== 'all' ? 1 : 0);

  return (
    <section id='portfolio'>
      <h5 style={{ paddingTop: '30px' }}>{t('portfolio.subtitle')}</h5>
      <h2>{t('portfolio.title')}</h2>

      {/* CONTAINER ENVUELVE TODO */}
      <div className='container'>
        {/* FILTROS */}
        <div className='portfolio__filters-wrapper'>
          <div className='portfolio__filters'>
            {/* BÚSQUEDA */}
            <div className='portfolio__search'>
              <FaSearch />
              <input
                type='text'
                placeholder={t('portfolio.filters.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className='btn-clear-search' onClick={clearSearch}>
                  <FaTimes />
                </button>
              )}
            </div>

            {/* TECNOLOGÍA */}
            <div className='portfolio__filter-select' ref={techDropdownRef}>
              <div
                className={`filter-select-trigger ${techDropdownOpen ? 'open' : ''}`}
                onClick={() => setTechDropdownOpen(!techDropdownOpen)}
              >
                <FaFilter />
                <span>
                  {selectedTechs.length === 0
                    ? t('portfolio.filters.allTech')
                    : `${selectedTechs.length} ${t('portfolio.filters.selected')}`}
                </span>
                <FaChevronDown />
              </div>
              {techDropdownOpen && (
                <div className='filter-select-dropdown'>
                  <div className='filter-select-search'>
                    <FaSearch />
                    <input
                      type='text'
                      placeholder={t('portfolio.filters.searchTech')}
                      value={techSearchTerm}
                      onChange={(e) => setTechSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className='filter-select-options'>
                    {filteredTechnologies.map(tech => (
                      <div
                        key={tech}
                        className={`filter-option ${selectedTechs.includes(tech) ? 'selected' : ''}`}
                        onClick={() => toggleTech(tech)}
                      >
                        <span>{tech}</span>
                        {selectedTechs.includes(tech) && <FaCheck className='filter-check' />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* DEMO */}
            <div className='portfolio__filter-demo'>
              <div
                className={`demo-card ${hasDemo === 'yes' ? 'active' : ''}`}
                onClick={() => setHasDemo(hasDemo === 'yes' ? 'all' : 'yes')}
              >
                <FaCheckCircle />
                <span>{t('portfolio.filters.withDemo')}</span>
              </div>
            </div>

            {/* ORDENAR */}
            <div className='portfolio__filter-sort' ref={sortDropdownRef}>
              <div
                className={`filter-select-trigger ${sortDropdownOpen ? 'open' : ''}`}
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              >
                <FaSortAmountDown />
                <span>
                  {sortBy === 'recent' && t('portfolio.filters.sortRecent')}
                  {sortBy === 'title-asc' && t('portfolio.filters.sortAZ')}
                  {sortBy === 'title-desc' && t('portfolio.filters.sortZA')}
                </span>
                <FaChevronDown />
              </div>
              {sortDropdownOpen && (
                <div className='filter-select-dropdown'>
                  <div className='filter-select-options'>
                    <div
                      className={`filter-option ${sortBy === 'recent' ? 'selected' : ''}`}
                      onClick={() => { setSortBy('recent'); setSortDropdownOpen(false); }}
                    >
                      <span>{t('portfolio.filters.sortRecent')}</span>
                      {sortBy === 'recent' && <FaCheck className='filter-check' />}
                    </div>
                    <div
                      className={`filter-option ${sortBy === 'title-asc' ? 'selected' : ''}`}
                      onClick={() => { setSortBy('title-asc'); setSortDropdownOpen(false); }}
                    >
                      <span>{t('portfolio.filters.sortAZ')}</span>
                      {sortBy === 'title-asc' && <FaCheck className='filter-check' />}
                    </div>
                    <div
                      className={`filter-option ${sortBy === 'title-desc' ? 'selected' : ''}`}
                      onClick={() => { setSortBy('title-desc'); setSortDropdownOpen(false); }}
                    >
                      <span>{t('portfolio.filters.sortZA')}</span>
                      {sortBy === 'title-desc' && <FaCheck className='filter-check' />}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* LIMPIAR FILTROS */}
            {activeFiltersCount > 0 && (
              <button className='btn-clear-all-filters' onClick={clearFilters}>
                <FaTimes /> {t('portfolio.filters.clearFilters')}
              </button>
            )}
          </div>

          {/* FILTROS ACTIVOS */}
          {(selectedTechs.length > 0 || hasDemo === 'yes') && (
            <div className='portfolio__active-filters'>
              {selectedTechs.map(tech => (
                <div className='filter-tag' key={tech}>
                  <FaFilter />
                  <span>{tech}</span>
                  <button className='filter-tag-remove' onClick={() => removeTech(tech)}>
                    <FaTimes />
                  </button>
                </div>
              ))}
              {hasDemo === 'yes' && (
                <div className='filter-tag'>
                  <FaCheckCircle />
                  <span>{t('portfolio.filters.withDemo')}</span>
                  <button className='filter-tag-remove' onClick={() => setHasDemo('all')}>
                    <FaTimes />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* RESULTADOS */}
          <div className='portfolio__results-count'>
            {t('portfolio.filters.showing')} {Math.min(visibleProjects, filteredProjects.length)} {t('portfolio.filters.of')} {filteredProjects.length} {t('portfolio.filters.projects')}
          </div>
        </div>

        {/* PROYECTOS */}
        <div className='portfolio__container'>
          {filteredProjects.length === 0 ? (
            <div className='portfolio__no-results'>
              <div className='no-results-icon'>
                <FaSearch />
              </div>
              <h3>{t('portfolio.filters.noResults')}</h3>
              <p>{t('portfolio.filters.tryAdjusting')}</p>
              <button className='btn btn-primary' onClick={clearFilters}>
                {t('portfolio.filters.clearFilters')}
              </button>
            </div>
          ) : (
            filteredProjects.slice(0, visibleProjects).map((project) => (
              <article className='portfolio__item' key={project.id}>
                <div className='portfolio__item-image'>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <div className='portfolio__item-cta'>
                  <button className='btn' onClick={() => openModal(project)}>{t('portfolio.viewMore')}</button>
                </div>
              </article>
            ))
          )}
        </div>

        {filteredProjects.length > 0 && (
          <div className='ver__mas'>
            {visibleProjects < filteredProjects.length ? (
              <button className='btn btn-primary' onClick={showMoreProjects}>{t('portfolio.showMore')}</button>
            ) : filteredProjects.length > 6 && (
              <button className='btn btn-primary' onClick={showLessProjects}>{t('portfolio.showLess')}</button>
            )}
          </div>
        )}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
};

export default Portfolio;