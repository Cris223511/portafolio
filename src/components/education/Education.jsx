import React from 'react';
import { useTranslation } from 'react-i18next';
import './education.css';
import EDC1 from '../../assets/educacion1.jpeg';
import EDC2 from '../../assets/educacion2.jpeg';
import EDC5 from '../../assets/educacion5.jpeg';
import { ImTrophy } from 'react-icons/im';
import { BiBookBookmark } from 'react-icons/bi';
import { FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id='education'>
      <h5 style={{ paddingTop: '30px' }}>{t('education.subtitle')}</h5>
      <h2>{t('education.title')}</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>{t('education.institutions.0.name')}</h3>
            <div className='education-image'>
              <img src={EDC1} alt={t('education.institutions.0.shortName')} />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon' />
              <p>{t('education.institutions.0.period')}</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon' />
              <p>{t('education.institutions.0.location')}</p>
            </li>
            <li>
              <FaGraduationCap className='service__list-icon' />
              <p>{t('education.institutions.0.degree')}</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon' />
              <p>{t('education.institutions.0.achievements.0')}</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>{t('education.institutions.0.achievements.1')}</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>{t('education.institutions.1.name')}</h3>
            <div className='education-image'>
              <img src={EDC2} alt={t('education.institutions.1.shortName')} />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon' />
              <p>{t('education.institutions.1.period')}</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon' />
              <p>{t('education.institutions.1.location')}</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon' />
              <p>{t('education.institutions.1.degree')}</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>{t('education.institutions.1.achievements.0')}</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>{t('education.institutions.1.achievements.1')}</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>{t('education.institutions.2.name')}</h3>
            <div className='education-image'>
              <img src={EDC5} alt={t('education.institutions.2.shortName')} />
            </div>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className='service__list-icon' />
              <p>{t('education.institutions.2.period')}</p>
            </li>
            <li>
              <MdLocationOn className='service__list-icon' />
              <p>{t('education.institutions.2.location')}</p>
            </li>
            <li>
              <BiBookBookmark className='service__list-icon' />
              <p>{t('education.institutions.2.degree')}</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>{t('education.institutions.2.achievements.0')}</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>{t('education.institutions.2.achievements.1')}</p>
            </li>
            <li>
              <ImTrophy className='service__list-icon' />
              <p>{t('education.institutions.2.achievements.2')}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Education;