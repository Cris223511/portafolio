import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookBookmark, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { FaToolbox } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { scrollToSection } from '../../utils/smoothScroll';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <a href="#home" onClick={(e) => { e.preventDefault(); setActiveNav('#home'); scrollToSection('home'); }} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={(e) => { e.preventDefault(); setActiveNav('#about'); scrollToSection('about'); }} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#education" onClick={(e) => { e.preventDefault(); setActiveNav('#education'); scrollToSection('education'); }} className={activeNav === '#education' ? 'active' : ''}><BiBookBookmark /></a>
      <a href="#experience" onClick={(e) => { e.preventDefault(); setActiveNav('#experience'); scrollToSection('experience'); }} className={activeNav === '#experience' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#work" onClick={(e) => { e.preventDefault(); setActiveNav('#work'); scrollToSection('work'); }} className={activeNav === '#work' ? 'active' : ''}><MdWork /></a>
      <a href="#portfolio" onClick={(e) => { e.preventDefault(); setActiveNav('#portfolio'); scrollToSection('portfolio'); }} className={activeNav === '#portfolio' ? 'active' : ''}><FaToolbox /></a>
      <a href="#contact" onClick={(e) => { e.preventDefault(); setActiveNav('#contact'); scrollToSection('contact'); }} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Nav;
