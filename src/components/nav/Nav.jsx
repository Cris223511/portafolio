import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookBookmark, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { FaToolbox } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { GiCapitol } from 'react-icons/gi';
import { scrollToSection } from '../../utils/smoothScroll';

const sections = ['home', 'about', 'education', 'experience', 'work', 'portfolio', 'conferences', 'contact'];

const Nav = () => {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const ai = sections.indexOf(a.target.id);
            const bi = sections.indexOf(b.target.id);
            return ai - bi;
          });
        if (visible.length > 0) {
          setActiveNav('#' + visible[0].target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const icons = {
    home: <AiOutlineHome />,
    about: <AiOutlineUser />,
    education: <BiBookBookmark />,
    experience: <RiServiceLine />,
    work: <MdWork />,
    portfolio: <FaToolbox />,
    conferences: <GiCapitol />,
    contact: <BiMessageSquareDetail />
  };

  return (
    <nav>
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => { e.preventDefault(); setActiveNav(`#${id}`); scrollToSection(id); }}
          className={activeNav === `#${id}` ? 'active' : ''}
          title={t(`nav.${id}`)}
        >
          {icons[id]}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
