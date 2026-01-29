import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import { scrollToSection } from '../../utils/smoothScroll';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div id='header' className="container header__container">
        <div className="header__content">
          <span className="header__greeting">👋 {t('header.greeting')}</span>
          <h1 className="header__name">{t('header.name')}</h1>
          <h2 className="header__title">{t('header.title')}</h2>
          <p className="header__description">
            {t('header.subtitle')}
          </p>
          <CTA />
        </div>
        <HeaderSocial />
        <a href="#footer" className='scroll__down' onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>
          {t('header.scrollDown')}
        </a>
      </div>
    </header>
  );
};

export default Header;