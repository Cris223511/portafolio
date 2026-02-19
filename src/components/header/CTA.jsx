import React from 'react';
import { useTranslation } from 'react-i18next';
import CV_ES from '../../assets/Christopher_Antonio_Pillihuamán_Santiago_CV_ES.pdf';
import CV_EN from '../../assets/Christopher_Antonio_Pillihuamán_Santiago_CV_EN.pdf';
import { scrollToSection } from '../../utils/smoothScroll';

const CTA = () => {
  const { t, i18n } = useTranslation();

  // Selecciona el CV según el idioma actual
  const currentCV = i18n.language === 'en' ? CV_EN : CV_ES;
  const cvFileName = i18n.language === 'en'
    ? 'Christopher_Antonio_Pillihuamán_Santiago_CV_EN.pdf'
    : 'Christopher_Antonio_Pillihuamán_Santiago_CV_ES.pdf';

  return (
    <div className='cta'>
      <a href={currentCV} download={cvFileName} className='btn'>
        {t('cta.downloadCV')}
      </a>
      <a href="#contact" className='btn btn-primary' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
        {t('cta.contact')}
      </a>
    </div>
  );
};

export default CTA;