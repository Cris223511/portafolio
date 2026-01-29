import React from 'react';
import { useTranslation } from 'react-i18next';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { scrollToSection } from '../../utils/smoothScroll';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about'>
      <h5 style={{ paddingTop: '30px' }}>{t('about.subtitle')}</h5>
      <h2>{t('about.title')}</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img unselectable='on' src={ME} alt="About" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <GiBrain className='about__icon' />
              <h5>{t('about.cards.experience')}</h5>
              <small>{t('about.cards.experienceValue')}</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>{t('about.cards.diplomas')}</h5>
              <small>{t('about.cards.diplomasValue')}</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>{t('about.cards.projects')}</h5>
              <small>{t('about.cards.projectsValue')}</small>
            </article>
          </div>
          <br />
          <br />
          <h3>{t('about.bioTitle')}</h3>
          <p>
            {t('about.bio1')}<br /><br />
            {t('about.bio2')}<br /><br />
            {t('about.bio3')}<br /><br />
            {t('about.bio4')}
          </p>
          <h3>{t('about.objectiveTitle')}</h3>
          <p>
            {t('about.objective')}
          </p>

          <a href="#contact" className='btn btn-primary' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            {t('cta.contact')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;