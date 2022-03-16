import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'

const Portfolio = () => {

  const funcion1 = () =>{
    document.getElementById("contenedor2").style.display="grid";
    document.getElementById("contenedor1").style.marginBottom="2vh";
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="flex";
  }
  const funcion2 = () =>{
    document.getElementById("contenedor3").style.display="grid";
    document.getElementById("contenedor2").style.marginBottom="2vh";
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="none";
    document.getElementById("btn3").style.display="flex";
  }
  const funcion3 = () =>{
    document.getElementById("contenedor2").style.display="none";
    document.getElementById("contenedor3").style.display="none";
    document.getElementById("btn1").style.display="flex";
    document.getElementById("btn2").style.display="none";
    document.getElementById("btn3").style.display="none";
  }

  return (
    <section id='portfolio'>
      <h5>¿Cuáles son mis proyectos?</h5>
      <h2>Mis Proyectos</h2>

      <div className='container portfolio__container' id='contenedor1'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Cinerama - Venta de Entradas de Cine</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Introducción - Calidad y Pruebas Software</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Dominio de Sistema de Control y Gobierno TI</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>CompuSAC - Productos Tecnológicos</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Pruebas y Servicios - Amazon Web Services</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Estructuras Discretas - Todo sobre Grafos</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>  
      </div>

      <div className='ver__mas' id='btn1'>
        <a className='btn btn-primary' onClick={()=>funcion1()}>Ver Más Proyectos</a>
      </div>

      <div className='container portfolio__container' id='contenedor2'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Todo Sobre el Algoritmo Quicksort en C++</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>VentaMas - Venta de Productos en General</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>OYE - Canciones Gratis para La Comunidad</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Blog - Comparte tus Experiencias de Viajes</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Fotos para tí - Comparte tus Mejores Fotos</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Escuela Aprende y Disfruta - Entradas y Más</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>
      </div>

      <div className='ver__mas' id='btn2'>
        <a className='btn btn-primary' onClick={()=>funcion2()}>Ver Más Proyectos</a>
      </div>

      <div className='container portfolio__container' id='contenedor3'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Formulario Avanzado y DB con PHP</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Escuela Aprende y Disfruta - Entradas y Más</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Billetera virtual de Monedas BitCoin</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Matemática Aplicada Avanzada con Java</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Recetas de Ingredientes y Cocina para Tí</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Salvando Patitas - Rescata a un Animal</h3>
          <div className="portfolio__item-cta">
          <a href="/#" className='btn'>Repositorio</a>
          <a href="/#" className='btn btn-primary'>Ver más</a>
          </div>
        </article>
      </div>

      <div className='ver__mas' id='btn3'>
        <a href='#portfolio' className='btn btn-primary' onClick={()=>funcion3()}>Ver Menos</a>
      </div>
    </section>
  )
}

export default Portfolio