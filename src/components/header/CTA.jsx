import React from 'react';
import { useTranslation } from 'react-i18next';
import CV from '../../assets/Christopher_Antonio_Pillihuamán_Santiago_CV.pdf';
import { scrollToSection } from '../../utils/smoothScroll';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className='cta'>
      <a href={CV} download="Christopher_Antonio_Pillihuamán_Santiago_CV.pdf" className='btn'>
        {t('cta.downloadCV')}
      </a>
      <a href="#contact" className='btn btn-primary' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
        {t('cta.contact')}
      </a>
    </div>
  );
};

export default CTA;