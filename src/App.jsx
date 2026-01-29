import React, { useEffect, useState } from 'react';
import './i18n';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LanguageToggle from './components/nav/LanguageToggle';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Work from './components/work/Work';
import Portfolio from './components/portfolio/Portfolio';
import Conferences from './components/conferences/Conferences';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula carga por 2 segundos
  }, []);

  return (
    <>
      {/* Loader con efecto de desvanecimiento */}
      <div className={`loader-container ${isLoading ? '' : 'fade-out-loader'}`}>
        {isLoading && <Loader />}
      </div>

      {/* Contenido con animación de aparición */}
      <div className={`app-container ${isLoading ? 'fade-out' : 'fade-in'}`}>
        <Header />
        <Nav />
        <LanguageToggle />
        <About />
        <Education />
        <Experience />
        <Work />
        <Portfolio />
        <Conferences />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
