import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';
import { FaStackOverflow, FaReact } from 'react-icons/fa';
import { scrollToSection } from '../../utils/smoothScroll';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id='footer'>
      <a href="#home" className='footer__logo' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
        Christopher PS
      </a>

      <ul className='permalinks'>
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>{t('footer.nav.home')}</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t('footer.nav.about')}</a></li>
        <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>{t('footer.nav.education')}</a></li>
        <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>{t('footer.nav.experience')}</a></li>
        <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>{t('footer.nav.work')}</a></li>
        <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>{t('footer.nav.portfolio')}</a></li>
        <li><a href="#conferences" onClick={(e) => { e.preventDefault(); scrollToSection('conferences'); }}>{t('footer.nav.conferences')}</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t('footer.nav.contact')}</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://es.stackoverflow.com/users/262104/cris223511-dev" target="_blank" rel="noopener noreferrer"><FaStackOverflow /></a>
        <a href="https://www.linkedin.com/in/cris223511" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/cris223511" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://twitter.com/cris223511" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        <a href="https://www.instagram.com/cris223511.dev" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://www.facebook.com/cris223511" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
        <a href="https://www.youtube.com/channel/UC9CdEoE4egh0uHrHMn7J5lA" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
      </div>

      <div className='footer__copyright'>
        <small>{t('footer.copyright')}</small>
        <FaReact className="react-icon" />
      </div>
    </footer>
  );
};

export default Footer;