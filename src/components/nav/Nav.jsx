import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookBookmark, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { FaToolbox } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { GiCapitol } from 'react-icons/gi';
import { scrollToSection } from '../../utils/smoothScroll';

const Nav = () => {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <a href="#home" onClick={(e) => { e.preventDefault(); setActiveNav('#home'); scrollToSection('home'); }} className={activeNav === '#home' ? 'active' : ''} title={t('nav.home')}><AiOutlineHome /></a>
      <a href="#about" onClick={(e) => { e.preventDefault(); setActiveNav('#about'); scrollToSection('about'); }} className={activeNav === '#about' ? 'active' : ''} title={t('nav.about')}><AiOutlineUser /></a>
      <a href="#education" onClick={(e) => { e.preventDefault(); setActiveNav('#education'); scrollToSection('education'); }} className={activeNav === '#education' ? 'active' : ''} title={t('nav.education')}><BiBookBookmark /></a>
      <a href="#experience" onClick={(e) => { e.preventDefault(); setActiveNav('#experience'); scrollToSection('experience'); }} className={activeNav === '#experience' ? 'active' : ''} title={t('nav.experience')}><RiServiceLine /></a>
      <a href="#work" onClick={(e) => { e.preventDefault(); setActiveNav('#work'); scrollToSection('work'); }} className={activeNav === '#work' ? 'active' : ''} title={t('nav.work')}><MdWork /></a>
      <a href="#portfolio" onClick={(e) => { e.preventDefault(); setActiveNav('#portfolio'); scrollToSection('portfolio'); }} className={activeNav === '#portfolio' ? 'active' : ''} title={t('nav.portfolio')}><FaToolbox /></a>
      <a href="#conferences" onClick={(e) => { e.preventDefault(); setActiveNav('#conferences'); scrollToSection('conferences'); }} className={activeNav === '#conferences' ? 'active' : ''} title={t('nav.conferences')}><GiCapitol /></a>
      <a href="#contact" onClick={(e) => { e.preventDefault(); setActiveNav('#contact'); scrollToSection('contact'); }} className={activeNav === '#contact' ? 'active' : ''} title={t('nav.contact')}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Nav;