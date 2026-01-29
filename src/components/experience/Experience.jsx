import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Experience = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Las categorías ahora vienen del JSON de traducciones
  const skillCategories = t('experience.categories', { returnObjects: true });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id='experience'>
      <h5 style={{ paddingTop: '30px' }}>{t('experience.subtitle')}</h5>
      <h2>{t('experience.title')}</h2>
      <div className='container experience__carousel-container'>
        <button className='carousel__btn carousel__btn--prev' onClick={prevSlide} aria-label={t('experience.prev')}>
          <IoChevronBack />
        </button>
        <div className='carousel__track'>
          <div className='carousel__card'>
            <h3>{skillCategories[currentIndex].title}</h3>
            <div className='experience__content'>
              {skillCategories[currentIndex].skills.map((skill, idx) => (
                <article key={idx} className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        </div>
        <button className='carousel__btn carousel__btn--next' onClick={nextSlide} aria-label={t('experience.next')}>
          <IoChevronForward />
        </button>
        <div className='carousel__dots'>
          {skillCategories.map((_, index) => (
            <button
              key={index}
              className={`carousel__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`${t('experience.goToSlide')} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;